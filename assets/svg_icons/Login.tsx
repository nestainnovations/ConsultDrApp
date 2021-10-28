import * as React from "react";
import Svg, { Defs, Pattern, Image, G, Path, Circle } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={244}
      height={253.584}
      viewBox="0 0 244 253.584"
      {...props}
    >
      <Defs>
        <Pattern
          id="a"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 65 67"
        >
          <Image
            width={65}
            height={67}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABDCAMAAAD04Zh8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABPlBMVEUAAAB4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJx4kJytvMO3xMq1w8mwv8Wnt7+6xsyltb3DztN4kJy2w8nEz9Sxv8bm6+3////e5OeCxPiJx/khlvMunPSPo62Qo63P2NyuvMN9laBmt/dvu/euvcTG0daTp7DH0daywMeAlqLJ09eYqrPj8v32+/+Yq7S2w8qCmKS53vu2xMrL1Nmcrredrre6x82FmqWFm6a7x83N1trb4uX+/v7X3uLZ4OP2+Pn2+PjQ2d309vfX3uHk6ev9/f3V3eDy9fby9Pbh5+n8/f3U3N/w8/Tf5ej7/Pz7+/zS297t8fLd4+b5+vvR2t7r7/Da4eTy9PUAAAC7Url9AAAAI3RSTlMAFAeJ/CvQAXD4G7xX7g+jP+H+My3xzkGCnKDP3NSzTeQj+RPLO7wAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4goEECUdxVmAkQAAAfVJREFUWMPt1sdaAjEYheEIKtjFXuhRsXus2HtH7BXs/f6vQEbBYUgmk0k2Ljzr/O/Dw7cZQhxW5vTAYR5vudejA1RUUkorK5Tvff4qaqzK71MDqmtoYTXVKkBtHTVXV+v6vr6BWtdQ7w5oDNDSBRpd3Hu8TZRdk3zX74a8SXYtNORNqmtRQ96cu1oa8ubQlWnIm6grpyFvtl35DXmz6WrbULKrqKFU13zDnl6Z9XG6Fhom+mU2wHQ1G7oSzK7NZkOXAg00G0BLK1UWaGtLLkIb1RBom4+0Uy2BtpMOTaGDdDLCoGBDjNBJuhhhWLARRugi3aNawlg3CWJ8wipMCjZlFSamEcwJmEkq/pPJWfwIwNy8gjA/Z5zmBSwsmsISu2WOsLKAYgFYXRP8k+uMsLaRvzMFbG65ELY3wQrAzq6ksLdvHlkEpA7SEv9D+jAFOwE4OnYscXJkuSgVcJpIC+/TiVOIBeDwTACcnZc+5wjAxaXN/eUF+5gr4OqaC9xcQVYAMlnmPpvhvrQTcHtXAtzdwp0A3D8U3T/e2z0TCHh6/gWen6AiAC+v3/evL4I3YgFv7zng/Q3qAvDx+SF+4Cg47l/4F/6eENIUQiSsKYRJRFOIEBLVAqK5b9pYXAOIx4zP4pj6r4jG8h/3kXAo6H6hcMQ4/gIepVpZDtBPtAAAAABJRU5ErkJggg=="
          />
        </Pattern>
        <Pattern
          id="b"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 274 313"
        >
          <Image
            width={274}
            height={313}
            xlinkHref="data:image/png;base64,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"
          />
        </Pattern>
      </Defs>
      <G data-name="Group 352" transform="translate(-97 -50)">
        <Path
          data-name="Path 2"
          d="M3970.583 526.94a11.31 11.31 0 0016.6 12.744l37.341-21.588a11.337 11.337 0 1111.326 19.643l-140.516 81.239A11.337 11.337 0 113884 599.336l18.67-10.794a11.337 11.337 0 00-11.326-19.643l-18.67 10.794a11.337 11.337 0 11-11.326-19.643l31.447-18.18a11.337 11.337 0 00-11.326-19.643l-31.444 18.18a11.337 11.337 0 11-11.326-19.643l140.52-81.239a11.336 11.336 0 1111.323 19.643l-24.564 14.2a11.336 11.336 0 0011.323 19.643l24.567-14.2a11.337 11.337 0 1111.326 19.643l-37.34 21.588a11.294 11.294 0 00-5.271 6.898zm89.031-68.417a11.4 11.4 0 01-4.162 15.5l-7.862 4.545a11.337 11.337 0 11-11.326-19.643l7.862-4.545a11.36 11.36 0 0115.488 4.141z"
          transform="translate(-3736.041 -350.682)"
          fill="#ffe5d6"
          fillRule="evenodd"
        />
        <Path
          data-name="Rounded Rectangle 2 copy"
          d="M4571.592 445a1.01 1.01 0 011.009 1.009v7.29a1.01 1.01 0 01-2.02 0v-7.29a1.009 1.009 0 011.01-1.009zm-3.592 3.7h7.291a1.009 1.009 0 110 2.018H4568a1.009 1.009 0 010-2.018z"
          transform="translate(-4263.345 -355.513)"
          fill="#927dff"
          fillRule="evenodd"
        />
        <Path
          data-name="Rounded Rectangle 2 copy 3"
          d="M4312.6 305a1.009 1.009 0 011.01 1.009v7.29a1.01 1.01 0 11-2.02 0v-7.29a1.009 1.009 0 011.01-1.009zm-3.587 3.7h7.288a1.009 1.009 0 110 2.017h-7.288a1.009 1.009 0 110-2.017z"
          transform="translate(-4077.262 -255)"
          fill="#927dff"
          fillRule="evenodd"
        />
        <Path
          data-name="Rounded Rectangle 2 copy 5"
          d="M3847.592 455a1.011 1.011 0 011.01 1.009v7.29a1.01 1.01 0 01-2.02 0v-7.29a1.008 1.008 0 011.009-1.009zm-3.592 3.7h7.291a1.009 1.009 0 110 2.018H3844a1.009 1.009 0 110-2.018z"
          transform="translate(-3743.186 -362.726)"
          fill="#927dff"
          fillRule="evenodd"
        />
        <Path
          data-name="Rounded Rectangle 2 copy 4"
          d="M4238.593 1141a1.008 1.008 0 011.01 1.01v7.288a1.008 1.008 0 01-2.017 0v-7.288a1.008 1.008 0 011.007-1.01zm-3.59 3.7h7.292a1.008 1.008 0 010 2.017H4235a1.008 1.008 0 010-2.017z"
          transform="translate(-4024.093 -855.395)"
          fill="#927dff"
          fillRule="evenodd"
        />
        <Path
          data-name="Rounded Rectangle 2 copy 2"
          d="M4432.6 959a1.009 1.009 0 011.01 1.009v7.29a1.01 1.01 0 01-2.02 0v-7.29a1.011 1.011 0 011.01-1.009zm-3.588 3.7h7.288a1.009 1.009 0 110 2.017h-7.288a1.009 1.009 0 010-2.018z"
          transform="translate(-4163.472 -724.687)"
          fill="#ff73b5"
          fillRule="evenodd"
        />
        <Circle
          data-name="Ellipse 3"
          cx={3.827}
          cy={3.827}
          r={3.827}
          transform="translate(146.748 104.34)"
          fill="none"
          stroke="#ff73b5"
          strokeWidth={4}
        />
        <Circle
          data-name="Ellipse 3 copy 2"
          cx={3.827}
          cy={3.827}
          r={3.827}
          transform="translate(315.124 267.359)"
          fill="none"
          stroke="#ff73b5"
          strokeWidth={5}
        />
        <Circle
          data-name="Ellipse 3 copy"
          cx={3.827}
          cy={3.827}
          r={3.827}
          transform="translate(103.123 205.365)"
          fill="none"
          stroke="#927dff"
          strokeWidth={4}
        />
        <Circle
          data-name="Ellipse 3 copy 3"
          cx={3.827}
          cy={3.827}
          r={3.827}
          transform="translate(179.906 51.531)"
          fill="none"
          stroke="#927dff"
          strokeWidth={3}
        />
        <Path
          transform="translate(322.777 145.918)"
          fill="url(#a)"
          d="M0 0H18.223V19.235H0z"
        />
        <Path
          transform="rotate(-5.13 1676.944 -1955.026)"
          fill="url(#b)"
          d="M0 0H77.447V88.077H0z"
        />
        <Image
          width={32.763}
          height={34.558}
          transform="rotate(3 -5026.91 3116.39)"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABOCAMAAACwn3BVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAclBMVEUAAACLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0qLw0oAAABka6xbAAAAJHRSTlMAJ1RscBB93l3uA5VeOPQGoP4vl9EL2ByyEtNTw8CqezVpbw7cV7qWAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+IKBBAlHcVZgJEAAADVSURBVFjD7dhHEoMwDIVhYRvT0nuvuv8ZYxNDSHbgN5ON/gN8M9JoJaKmRGnTO60S+im1GQ8ss2lXyouhkK/IW6isYiBfVQYqWnJWmC5eYq5nTKP21FT43VuExGwdNfgKvsvcZWIk5oQUilKkUZQmg6KMUEIJJZRQQgkllFBCCSXUv6kRjhrDqMkURs0IRc0XMGpJKGq1RlGbLYGo3Z4w1OEYfjtd6nTu3eV6az9OHepOcRmY9KGipZaKlxoKIAUKIb0piFRTGMlTIMlRKIkeMImeMOkFrYSSruEvNPwAAAAASUVORK5CYII="
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
