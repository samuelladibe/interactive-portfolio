'use client';

import { useState, type KeyboardEvent } from 'react';
import type { Content, Route } from '@/content/types';

// Diagram geometry, in viewBox units.
const WIDTH = 1200;
const HEIGHT = 420;
const LABEL_RIGHT = 188;
const SOURCE_TOP = 58;
const SOURCE_STEP = 36;
const INGEST_X = 330;
const INGEST_WIDTH = 150;
const CORE_Y = 220;
const LAYERS = [
  { name: 'raw', x: 590, width: 92 },
  { name: 'staging', x: 700, width: 92 },
  { name: 'entities', x: 810, width: 92 },
  { name: 'datamarts', x: 920, width: 108 },
];
const OUTPUT_X = 1084;
const OUTPUT_WIDTH = 116;
const INGEST_Y: Record<Route, number> = { airbyte: 130, python: 276, other: 382 };

const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const mid = (x1 + x2) / 2;
  return `C${mid},${y1} ${mid},${y2} ${x2},${y2}`;
};

const sourceY = (index: number) => SOURCE_TOP + index * SOURCE_STEP;
const ingestEnd = INGEST_X + INGEST_WIDTH;

const inPath = (index: number, route: Route) =>
  `M${LABEL_RIGHT},${sourceY(index)} ${curve(LABEL_RIGHT, sourceY(index), INGEST_X, INGEST_Y[route])}`;
const outPath = (route: Route) =>
  `M${ingestEnd},${INGEST_Y[route]} ${curve(ingestEnd, INGEST_Y[route], LAYERS[0].x, CORE_Y)}`;
const fullRoute = (index: number, route: Route) =>
  `${inPath(index, route)} L${ingestEnd},${INGEST_Y[route]} ${curve(
    ingestEnd,
    INGEST_Y[route],
    LAYERS[0].x,
    CORE_Y,
  )} L${OUTPUT_X},${CORE_Y}`;

export default function Pipeline({ t }: { t: Content['pipeline'] }) {
  const [selectedId, setSelectedId] = useState('netsuite');
  const index = t.sources.findIndex((source) => source.id === selectedId);
  const selected = t.sources[index];

  const ingest: { route: Route; label: string }[] = [
    { route: 'airbyte', label: 'Airbyte' },
    { route: 'python', label: 'Python' },
    { route: 'other', label: t.otherNode },
  ];
  const ingestLabel = ingest.find((node) => node.route === selected.route)?.label;
  const route = fullRoute(index, selected.route);

  const onKey = (event: KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedId(id);
    }
  };

  return (
    <div className="mt-20 border-t border-line pt-10">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{t.title}</h2>
      <p id="pipeline-hint" className="mt-2 text-muted">
        {t.hint}
      </p>

      {/* Compact selector below the width where the diagram stays readable. */}
      <div className="mt-6 flex flex-wrap gap-2 lg:hidden" role="group" aria-labelledby="pipeline-hint">
        {t.sources.map((source) => (
          <button
            key={source.id}
            type="button"
            aria-pressed={source.id === selectedId}
            onClick={() => setSelectedId(source.id)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              source.id === selectedId ? 'border-ink bg-ink text-paper' : 'border-line text-ink'
            }`}
          >
            {source.name}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mt-8 hidden w-full lg:block" role="group" aria-labelledby="pipeline-hint">
        <g fill="var(--muted)" className="font-sans" fontSize="14">
          <text x="8" y="20">{t.sourcesLabel}</text>
          <text x={INGEST_X} y="20">{t.ingestionLabel}</text>
          <text x={OUTPUT_X} y="20">{t.outputLabel}</text>
        </g>

        {/* Warehouse zone */}
        <rect x="566" y="164" width="486" height="88" rx="10" fill="var(--wash)" />
        <text x="590" y="186" fontSize="14" fill="var(--muted)" className="font-sans">
          {t.warehouseLabel}
        </text>

        {/* All routes, quiet */}
        <g fill="none" stroke="var(--route)" strokeWidth="1.25">
          {t.sources.map((source, i) => (
            <path key={source.id} d={inPath(i, source.route)} pathLength={1} className="pipe-draw" />
          ))}
          {ingest.map((node) => (
            <path key={node.route} d={outPath(node.route)} pathLength={1} className="pipe-draw" />
          ))}
          <path d={`M${LAYERS[0].x},${CORE_Y} L${OUTPUT_X},${CORE_Y}`} pathLength={1} className="pipe-draw" />
        </g>

        {/* The chosen route. The key restarts the travelling packet on each choice. */}
        <g key={selectedId} fill="none" strokeLinecap="round">
          <path d={route} stroke="var(--signal)" strokeWidth="2.25" />
          <path d={route} pathLength={100} stroke="var(--ink)" strokeWidth="4" strokeDasharray="4 196" className="pipe-packet" />
        </g>

        {/* Sources */}
        {t.sources.map((source, i) => {
          const isOn = source.id === selectedId;
          return (
            <g
              key={source.id}
              role="button"
              tabIndex={0}
              aria-pressed={isOn}
              aria-label={source.name}
              onClick={() => setSelectedId(source.id)}
              onKeyDown={(event) => onKey(event, source.id)}
              className="pipe-source group cursor-pointer"
            >
              <rect
                className="pipe-source-box"
                x="0"
                y={sourceY(i) - 16}
                width={LABEL_RIGHT}
                height="32"
                rx="6"
                fill={isOn ? 'var(--wash)' : 'transparent'}
                stroke="transparent"
              />
              <text
                x="8"
                y={sourceY(i) + 5}
                fontSize="15"
                fontWeight={isOn ? 600 : 400}
                fill={isOn ? 'var(--ink)' : 'var(--muted)'}
                className="font-sans transition-colors group-hover:fill-ink"
              >
                {source.name}
              </text>
              <circle cx={LABEL_RIGHT} cy={sourceY(i)} r="3.5" fill={isOn ? 'var(--signal)' : 'var(--route)'} />
            </g>
          );
        })}

        {/* Ingestion */}
        {ingest.map((node) => {
          const isOn = selected.route === node.route;
          return (
            <g key={node.route}>
              <rect
                x={INGEST_X}
                y={INGEST_Y[node.route] - 18}
                width={INGEST_WIDTH}
                height="36"
                rx="18"
                fill="var(--paper)"
                stroke={isOn ? 'var(--signal)' : 'var(--route)'}
                strokeWidth={isOn ? 2 : 1.25}
              />
              <text
                x={INGEST_X + INGEST_WIDTH / 2}
                y={INGEST_Y[node.route] + 5}
                textAnchor="middle"
                fontSize="13"
                fill="var(--ink)"
                className="font-mono"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Warehouse layers */}
        {LAYERS.map(({ name, x, width }) => (
          <g key={name}>
            <rect x={x} y={CORE_Y - 17} width={width} height="34" rx="6" fill="var(--paper)" stroke="var(--signal)" strokeWidth="1.25" />
            <text x={x + width / 2} y={CORE_Y + 5} textAnchor="middle" fontSize="13" fill="var(--ink)" className="font-mono">
              {name}
            </text>
          </g>
        ))}

        {/* Output */}
        <rect x={OUTPUT_X} y={CORE_Y - 18} width={OUTPUT_WIDTH} height="36" rx="18" fill="var(--ink)" />
        <text
          x={OUTPUT_X + OUTPUT_WIDTH / 2}
          y={CORE_Y + 5}
          textAnchor="middle"
          fontSize="13"
          fontWeight="500"
          fill="var(--paper)"
          className="font-sans"
        >
          {t.outputNode}
        </text>
      </svg>

      <div aria-live="polite" className="mt-8 grid gap-3 lg:mt-4 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-8">
        <p className="font-display text-xl font-bold">{selected.name}</p>
        <div>
          <p className="max-w-[62ch] text-lg">{selected.note}</p>
          {/* The diagram is hidden on small screens, so the route is written out here. */}
          <p className="mt-3 font-mono text-sm text-muted lg:hidden">
            {[ingestLabel, ...LAYERS.map((layer) => layer.name), t.outputNode].join(' > ')}
          </p>
        </div>
      </div>
    </div>
  );
}
