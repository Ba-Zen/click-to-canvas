const Sky = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f8f8ff_40%,#bae6fd_100%)]" />
  );
};

const OrangeGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f8f8ff_1px,transparent_1px),linear-gradient(to_bottom,#f8f8ff_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#fcc57c,transparent)]" />
    </div>
  );
};

const Blush = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#f9a8d4] opacity-50 blur-[80px]" />
    </div>
  );
};

const Batman = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black" />
  );
};
const Sunny = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-500" />
  );
};
const Sedona = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-800 via-yellow-600 to-white" />
  );
};
const Buzz = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-gradient-to-b from-white from-10% via-sky-400 via-80% to-emerald-500 to-95%" />
  );
};
const Aurora = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-gradient-to-b from-white from-10% via-sky-400 via-80% to-purple-400 to-95%" />
  );
};

const Zordon = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900" />
  );
};
const Helios = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-red-800" />
  );
};

export const CANVAS_LIST = [
  {
    name: 'Sky',
    component: <Sky />,
    theme: 'light',
  },
  {
    name: 'Blush',
    component: <Blush />,
    theme: 'light',
  },
  {
    name: 'Orange Grid',
    component: <OrangeGrid />,
    theme: 'light',
  },
  {
    name: 'Batman',
    component: <Batman />,
    theme: 'dark',
  },
  {
    name: 'Sunny',
    component: <Sunny />,
    theme: 'light',
  },
  {
    name: 'Sedona',
    component: <Sedona />,
    theme: 'light',
  },
  {
    name: 'Buzz',
    component: <Buzz />,
    theme: 'light',
  },
  {
    name: 'Aurora',
    component: <Aurora />,
    theme: 'light',
  },
  {
    name: 'Zordon',
    component: <Zordon />,
    theme: 'dark',
  },
  {
    name: 'Helios',
    component: <Helios />,
    theme: 'light',
  },
] as const;
