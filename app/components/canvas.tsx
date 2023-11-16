const CanvasLightBlue400 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f8f8ff_40%,#bae6fd_100%)]" />
  );
};

const CanvasGridLightOrange = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f8f8ff_1px,transparent_1px),linear-gradient(to_bottom,#f8f8ff_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffedd5,transparent)]" />
    </div>
  );
};

const CanvasLightPinkOrb = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#f9a8d4] opacity-50 blur-[80px]" />
    </div>
  );
};

export const CANVAS_LIST = [
  {
    name: 'Canvas Light Blue 400',
    component: <CanvasLightBlue400 />,
    theme: 'light',
  },
  {
    name: 'Canvas Light Pink Orb',
    component: <CanvasLightPinkOrb />,
    theme: 'light',
  },
  {
    name: 'Canvas Grid Light Orange',
    component: <CanvasGridLightOrange />,
    theme: 'light',
  },
] as const;
