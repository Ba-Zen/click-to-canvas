import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { toast } from 'sonner';

type ControlProps = {
  children: React.ReactElement;
  setPreview: (preview: React.ReactNode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

const Controls: React.FC<ControlProps> = ({
  children,
  setPreview,
  theme,
  setTheme,
}) => {
  const copy = () => {
    const code = ReactDOMServer.renderToString(children);

    navigator.clipboard.writeText(code);
    toast.success('Copied to the clipboard');
  };

  return (
    <>
      <div className="relative aspect-video overflow-hidden rounded-lg ring-1 ring-zinc-900/10">
        <div className="absolute left-4 top-4 z-10 cursor-pointer">
          <div className="flex flex-row gap-4">
            <div
              className="rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-white"
              onClick={() => {
                setPreview(children);
                setTheme(theme);
              }}
            >
              preview
            </div>
            <div
              className="rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-white"
              onClick={copy}
            >
              copy
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Controls;
