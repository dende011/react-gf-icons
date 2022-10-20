import * as React from "react";

function SvgTotal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M98.5 90.5c-2.5 2.4-2.5 2.4-2.5 24V136H74.5c-28.8 0-26.5-2.3-26.5 26.5V184H26.5c-21.6 0-21.6 0-24 2.5L0 188.9v230.2l2.5 2.4 2.4 2.5h406.2l2.4-2.5c2.5-2.4 2.5-2.4 2.5-24V376h21.5c21.6 0 21.6 0 24-2.5 2.5-2.4 2.5-2.4 2.5-24V328h21.5c21.6 0 21.6 0 24-2.5l2.5-2.4V92.9l-2.5-2.4-2.4-2.5H100.9l-2.4 2.5zM496 208v104H112V104h384v104zM96 237.5v85.6l2.5 2.4 2.4 2.5H448v32H176v16h224v32H16V200h32v171.1l2.5 2.4 2.4 2.5H128v-16H64V152h32v85.5z" />
      <path d="M162.5 122.5c-1.6 1.5-2.5 3.5-2.5 5.6 0 12.2-11.7 23.9-23.9 23.9-2.1 0-4.1.9-5.6 2.5l-2.5 2.4v102.2l2.5 2.4c1.5 1.6 3.5 2.5 5.6 2.5 12.2 0 23.9 11.7 23.9 23.9 0 2.1.9 4.1 2.5 5.6l2.4 2.5h278.2l2.4-2.5c1.6-1.5 2.5-3.5 2.5-5.6 0-12.2 11.7-23.9 23.9-23.9 2.1 0 4.1-.9 5.6-2.5l2.5-2.4V156.9l-2.5-2.4c-1.5-1.6-3.5-2.5-5.6-2.5-12.2 0-23.9-11.7-23.9-23.9 0-2.1-.9-4.1-2.5-5.6l-2.4-2.5H164.9l-2.4 2.5zm85.1 18.1c-16.1 13-27.5 33.7-30.7 55.4-4.2 29.1 7.8 60.3 30.4 79.1l5.8 4.9h-39c-30.6 0-39.1-.3-39.1-1.3 0-2.8-6.2-13.9-10.1-18.1-3.9-4.3-16.3-11.6-19.5-11.6-1.2 0-1.4-7-1.4-41 0-32.1.3-41 1.3-41 2.8 0 13.9-6.2 18.1-10.1 4.3-3.9 11.6-16.3 11.6-19.5 0-1.2 6.7-1.4 39.1-1.4h39.1l-5.6 4.6zm77.9-1.2c11.3 3.6 19.8 8.9 29 18.1 13.1 13.1 19.9 27.7 21.2 45.4 3 43.4-33 79.6-76.5 76.7-10.7-.6-22.8-4.3-32-9.7-7.7-4.6-20.8-17.9-25.5-25.9-2.1-3.6-4.9-10.1-6.4-14.5-2.2-6.8-2.6-9.8-2.7-20.5-.1-14.8 1.4-21.5 7.6-34 7.3-14.7 23.4-29 38.8-34.6 14.3-5.1 32.4-5.5 46.5-1zm107.5-2.2c0 2.9 6.2 14 10.1 18.2 3.9 4.3 16.3 11.6 19.5 11.6 1.2 0 1.4 7 1.4 41s-.2 41-1.4 41c-3.2 0-15.6 7.3-19.5 11.6-3.9 4.2-10.1 15.3-10.1 18.1 0 1-8.5 1.3-39.1 1.3h-39l5.8-4.9c13.8-11.4 23.6-27.1 28.6-45.6 2.9-10.7 3-31.6.3-41.9-5.1-19.1-15-35.2-28.9-46.7l-5.8-4.9h39c30.6 0 39.1.3 39.1 1.2z" />
      <path d="M296 164c0 3-.4 4-1.6 4-10.8 0-22.4 12.5-22.4 24 0 6.3 2.3 11.4 7.5 16.5 6.3 6.4 10 7.5 24.4 7.5 10.5 0 11.3.1 13.6 2.5 1.6 1.5 2.5 3.6 2.5 5.5s-.9 4-2.5 5.5c-2.3 2.4-3.1 2.5-13.5 2.5s-11.2-.1-13.5-2.5c-1.4-1.3-2.5-3.1-2.5-4 0-1.2-1.5-1.5-8-1.5-6.7 0-8 .3-8 1.6 0 10 12.4 22.4 22.4 22.4 1.2 0 1.6 1 1.6 4v4h16v-4c0-3.2.4-4 1.8-4 4.8 0 11.3-3.4 15.5-8 9.3-10.3 9-22.8-.8-32.5-6.3-6.4-10-7.5-24.4-7.5-10.5 0-11.3-.1-13.6-2.5-3.3-3.2-3.3-7.8 0-11 2.3-2.4 3.1-2.5 13.5-2.5s11.2.1 13.5 2.5c1.4 1.3 2.5 3.1 2.5 4 0 1.2 1.5 1.5 8 1.5 6.7 0 8-.3 8-1.6 0-7.6-8-18.2-15.7-20.8-2.6-.9-5.5-1.6-6.5-1.6-1.4 0-1.8-.8-1.8-4v-4h-16v4zM144 368v8h16v-16h-16v8z" />
    </svg>
  );
}

export default SvgTotal;
