'use client';
import { useState } from 'react';
import { CANVAS_LIST } from './components/canvas';
import Controls from './components/controls';
import { Toaster } from 'sonner';
import { Github } from 'lucide-react';

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetCanvas = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
      <Toaster richColors />
      <div className={`${theme}`}>
        <div className="fixed inset-0 h-full w-full -z-10">
          <div>{preview ? preview : null}</div>
        </div>
        <div className="pb-12">
          <div className="relative hidden md:flex flex-col mx-auto w-full items-end lg:items-center pt-40 max-w-6xl px-8">
            <div className="flex flex-col gap-y-12">
              <div className="border border-black dark:border-zinc-200 rounded-full w-fit mx-auto font-semibold px-2 py-1 dark:text-zinc-400">
                New canvases 🔋
              </div>
              <h1 className="text-3xl md:text-[8vw] lg:text-[6vw] font-semibold dark:text-zinc-100">
                Click to Canvas
              </h1>
              <p className="dark:text-zinc-400 max-w-md text-center mx-auto">
                A collection of tailwind canvas backgrounds for marketing
                websites and the like.
              </p>
              <div className="mx-auto">
                <a
                  href="https://github.com/ba-zen/click-to-canvas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Github
                    className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 pt-10 md:px-10">
            {CANVAS_LIST.map((canvas, i) => {
              return (
                <Controls
                  key={i}
                  setPreview={setPreview}
                  theme={canvas.theme}
                  setTheme={setTheme}
                >
                  {canvas.component}
                </Controls>
              );
            })}
          </div>
          <div
            onClick={resetCanvas}
            className="rounded-full w-fit mx-auto text-center bg-zinc-900 px-4 py-6 mt-24 text-lg font-medium text-white cursor-pointer"
          >
            Reset Canvas
          </div>
        </div>
      </div>
    </>
  );
}
