import * as React from "react"

const Logo = ({ width, height, tagline }) => {

  width ||= 185;
  height ||= 40;

  const noTagline = <svg  width={width} height={height} viewBox="0 0 369.64179104477614 78.24393759162808" class="css-1j8o68f"><defs id="SvgjsDefs2583"><linearGradient id="SvgjsLinearGradient2588"><stop id="SvgjsStop2589" stop-color="#147d6c" offset="0"></stop><stop id="SvgjsStop2590" stop-color="#1effff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient2591"><stop id="SvgjsStop2592" stop-color="#147d6c" offset="0"></stop><stop id="SvgjsStop2593" stop-color="#1effff" offset="1"></stop></linearGradient></defs><g id="SvgjsG2584" featurekey="symbolFeature-0" transform="matrix(1.4681935175443874,0,0,1.4681935175443874,0,-0.0004998637063630545)" fill="url(#SvgjsLinearGradient2588)"><g xmlns="http://www.w3.org/2000/svg"><path d="M33.921,41.453l-12.32,11.84l-1.04-1.039l0.96-16.32l-4.08-4.08L1.12,32.812L0,31.693l11.92-12.321h9.44     c12-12.08,12.16-12.16,12.16-12.16c5.84-5.92,19.681-7.36,19.841-7.2s-1.681,14.48-7.2,19.84l-12.24,12.161V41.453z      M18.64,41.693l-1.36-2.96l-1.92,2.159v-2.879h-2.88l2.08-2l-2.96-1.36l5.12-0.32l2.32,2.32L18.64,41.693z"></path></g></g><g id="SvgjsG2585" featurekey="nameFeature-0" transform="matrix(1.658820418867582,0,0,1.658820418867582,95.34588729026251,-4.375018252681887)" fill="url(#SvgjsLinearGradient2591)"><path d="M1.6 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M8.48 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M24.484 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M40.248000000000005 12 l3.32 22.84 l0.08 0 l3.32 -22.84 l4.04 0 l-4.32 28 l-6.56 0 l-4.32 -28 l4.44 0 z M77.25600000000001 40 l-4.48 0 c-0.24 -0.72 -0.4 -1.16 -0.4 -3.44 l0 -4.4 c0 -2.6 -0.88 -3.56 -2.88 -3.56 l-1.52 0 l0 11.4 l-4.4 0 l0 -28 l6.64 0 c4.56 0 6.52 2.12 6.52 6.44 l0 2.2 c0 2.88 -0.92 4.72 -2.88 5.64 l0 0.08 c2.2 0.92 2.92 3 2.92 5.92 l0 4.32 c0 1.36 0.04 2.36 0.48 3.4 z M70.09600000000002 16 l-2.12 0 l0 8.6 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -2.76 c0 -2 -0.68 -2.88 -2.24 -2.88 z M85.86000000000001 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M81.46000000000001 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M108.42400000000002 29.560000000000002 l4.16 0 l0 3.72 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -14.56 c0 -4.48 2.24 -7.04 6.56 -7.04 s6.56 2.56 6.56 7.04 l0 2.72 l-4.16 0 l0 -3 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 l0 15.12 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -4 z M127.46800000000002 40 l-4.28 -11.16 l-1.36 2.56 l0 8.6 l-4.4 0 l0 -28 l4.4 0 l0 12.12 l0.08 0 l5.68 -12.12 l4.4 0 l-6.12 12.48 l6.12 15.52 l-4.52 0 z M140.55200000000002 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M151.75600000000003 16 l0 -4 l13.6 0 l0 4 l-4.6 0 l0 24 l-4.4 0 l0 -24 l-4.6 0 z"></path></g></svg>;

  const withTagline = <svg  width={width} height={height} viewBox="0 0 369.5454545454545 95.3153421570742" class="css-1j8o68f"><defs id="SvgjsDefs4892"><linearGradient id="SvgjsLinearGradient4899"><stop id="SvgjsStop4900" stop-color="#147d6c" offset="0"></stop><stop id="SvgjsStop4901" stop-color="#1effff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient4902"><stop id="SvgjsStop4903" stop-color="#147d6c" offset="0"></stop><stop id="SvgjsStop4904" stop-color="#1effff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient4905"><stop id="SvgjsStop4906" stop-color="#147d6c" offset="0"></stop><stop id="SvgjsStop4907" stop-color="#1effff" offset="1"></stop></linearGradient></defs><g id="SvgjsG4893" featurekey="symbolFeature-0" transform="matrix(1.788526648644981,0,0,1.788526648644981,0,-0.0006089248786604483)" fill="url(#SvgjsLinearGradient4899)"><g xmlns="http://www.w3.org/2000/svg"><path d="M33.921,41.453l-12.32,11.84l-1.04-1.039l0.96-16.32l-4.08-4.08L1.12,32.812L0,31.693l11.92-12.321h9.44     c12-12.08,12.16-12.16,12.16-12.16c5.84-5.92,19.681-7.36,19.841-7.2s-1.681,14.48-7.2,19.84l-12.24,12.161V41.453z      M18.64,41.693l-1.36-2.96l-1.92,2.159v-2.879h-2.88l2.08-2l-2.96-1.36l5.12-0.32l2.32,2.32L18.64,41.693z"></path></g></g><g id="SvgjsG4894" featurekey="nameFeature-0" transform="matrix(1.5544191337640276,0,0,1.5544191337640276,112.51292934891731,-9.155611509506102)" fill="url(#SvgjsLinearGradient4902)"><path d="M1.6 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M8.48 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M24.484 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M40.248000000000005 12 l3.32 22.84 l0.08 0 l3.32 -22.84 l4.04 0 l-4.32 28 l-6.56 0 l-4.32 -28 l4.44 0 z M77.25600000000001 40 l-4.48 0 c-0.24 -0.72 -0.4 -1.16 -0.4 -3.44 l0 -4.4 c0 -2.6 -0.88 -3.56 -2.88 -3.56 l-1.52 0 l0 11.4 l-4.4 0 l0 -28 l6.64 0 c4.56 0 6.52 2.12 6.52 6.44 l0 2.2 c0 2.88 -0.92 4.72 -2.88 5.64 l0 0.08 c2.2 0.92 2.92 3 2.92 5.92 l0 4.32 c0 1.36 0.04 2.36 0.48 3.4 z M70.09600000000002 16 l-2.12 0 l0 8.6 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -2.76 c0 -2 -0.68 -2.88 -2.24 -2.88 z M85.86000000000001 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M81.46000000000001 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M108.42400000000002 29.560000000000002 l4.16 0 l0 3.72 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -14.56 c0 -4.48 2.24 -7.04 6.56 -7.04 s6.56 2.56 6.56 7.04 l0 2.72 l-4.16 0 l0 -3 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 l0 15.12 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -4 z M127.46800000000002 40 l-4.28 -11.16 l-1.36 2.56 l0 8.6 l-4.4 0 l0 -28 l4.4 0 l0 12.12 l0.08 0 l5.68 -12.12 l4.4 0 l-6.12 12.48 l6.12 15.52 l-4.52 0 z M140.55200000000002 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M151.75600000000003 16 l0 -4 l13.6 0 l0 4 l-4.6 0 l0 24 l-4.4 0 l0 -24 l-4.6 0 z"></path></g><g id="SvgjsG4895" featurekey="sloganFeature-0" transform="matrix(0.9065750302535159,0,0,0.9065750302535159,114.07048903025323,68.67028932112586)" fill="url(#SvgjsLinearGradient4905)"><path d="M8.0566 20.18555 c-4.0039 0 -7.0313 -2.7344 -7.0313 -7.1582 c0 -4.4043 3.0273 -7.1484 7.0313 -7.1484 c2.9297 0 5.332 1.4844 6.377 3.9746 l-2.1777 0.83008 c-0.72266 -1.6699 -2.3047 -2.627 -4.1992 -2.627 c-2.6367 0 -4.6973 1.8359 -4.6973 4.9707 c0 3.1543 2.0605 4.9805 4.6973 4.9805 c1.8945 0 3.4766 -0.94727 4.1992 -2.6172 l2.1777 0.83008 c-1.0449 2.4902 -3.4473 3.9648 -6.377 3.9648 z M28.3603109375 20.18555 c-4.0039 0 -7.0313 -2.7441 -7.0313 -7.1582 c0 -4.4043 3.0273 -7.1484 7.0313 -7.1484 c3.9941 0 7.0215 2.7441 7.0215 7.1484 c0 4.4141 -3.0273 7.1582 -7.0215 7.1582 z M28.3603109375 18.0176 c2.6367 0 4.6973 -1.8262 4.6973 -4.9902 c0 -3.1348 -2.0605 -4.9707 -4.6973 -4.9707 s-4.6973 1.8359 -4.6973 4.9707 c0 3.1641 2.0605 4.9902 4.6973 4.9902 z M43.576184375 20 l0 -13.926 l4.7656 0 c4.3555 0 6.543 2.832 6.543 6.9531 c0 4.1309 -2.1875 6.9727 -6.543 6.9727 l-4.7656 0 z M45.910184375 17.9102 l2.334 0 c2.8516 0 4.1895 -1.8457 4.1895 -4.8828 c0 -3.0176 -1.3379 -4.873 -4.1895 -4.873 l-2.334 0 l0 9.7559 z M70.9013421875 8.154 l-5.4102 0 l0 3.8574 l4.7852 0 l0 2.0605 l-4.7852 0 l0 3.8379 l5.4102 0 l0 2.0898 l-7.7734 0 l0 -13.926 l7.7734 0 l0 2.0801 z M99.4480703125 6.074 l-4.5801 7.2754 l0 6.6504 l-2.3438 0 l0 -6.6211 l-4.5996 -7.3047 l2.6172 0 l3.1445 5.2051 l3.1543 -5.2051 l2.6074 0 z M112.97456875 20.18555 c-4.0039 0 -7.0313 -2.7441 -7.0313 -7.1582 c0 -4.4043 3.0273 -7.1484 7.0313 -7.1484 c3.9941 0 7.0215 2.7441 7.0215 7.1484 c0 4.4141 -3.0273 7.1582 -7.0215 7.1582 z M112.97456875 18.0176 c2.6367 0 4.6973 -1.8262 4.6973 -4.9902 c0 -3.1348 -2.0605 -4.9707 -4.6973 -4.9707 s-4.6973 1.8359 -4.6973 4.9707 c0 3.1641 2.0605 4.9902 4.6973 4.9902 z M133.1611421875 20.18555 c-2.959 0 -5.2637 -1.6504 -5.2637 -4.9316 l0 -9.1797 l2.3438 0 l0 8.8574 c0 2.2168 1.2793 3.1641 2.9199 3.1641 s2.9395 -0.95703 2.9395 -3.1641 l0 -8.8574 l2.334 0 l0 9.1797 c0 3.2813 -2.3047 4.9316 -5.2734 4.9316 z M154.74418125 20 l-3.6133 -6.2109 l-1.5039 0 l0 6.2109 l-2.334 0 l0 -13.926 l4.834 0 c3.0176 0 4.3457 1.8066 4.3457 4.043 c0 1.9434 -1.1523 3.252 -2.998 3.584 l4.0137 6.2988 l-2.7441 0 z M149.62698125 8.047 l0 4.0137 l2.1582 0 c1.709 0 2.4414 -0.80078 2.4414 -1.9922 c0 -1.1816 -0.73242 -2.0215 -2.4414 -2.0215 l-2.1582 0 z M183.46675 8.154 l-5.5176 0 l0 3.8477 l4.7852 0 l0 2.0703 l-4.7852 0 l0 5.9277 l-2.3633 0 l0 -13.926 l7.8809 0 l0 2.0801 z M196.3193453125 20.18555 c-2.959 0 -5.2637 -1.6504 -5.2637 -4.9316 l0 -9.1797 l2.3438 0 l0 8.8574 c0 2.2168 1.2793 3.1641 2.9199 3.1641 s2.9395 -0.95703 2.9395 -3.1641 l0 -8.8574 l2.334 0 l0 9.1797 c0 3.2813 -2.3047 4.9316 -5.2734 4.9316 z M218.136684375 6.074 l0 2.0801 l-3.4375 0 l0 11.846 l-2.3242 0 l0 -11.846 l-3.4473 0 l0 -2.0801 l9.209 0 z M230.7353609375 20.18555 c-2.959 0 -5.2637 -1.6504 -5.2637 -4.9316 l0 -9.1797 l2.3438 0 l0 8.8574 c0 2.2168 1.2793 3.1641 2.9199 3.1641 s2.9395 -0.95703 2.9395 -3.1641 l0 -8.8574 l2.334 0 l0 9.1797 c0 3.2813 -2.3047 4.9316 -5.2734 4.9316 z M252.3184 20 l-3.6133 -6.2109 l-1.5039 0 l0 6.2109 l-2.334 0 l0 -13.926 l4.834 0 c3.0176 0 4.3457 1.8066 4.3457 4.043 c0 1.9434 -1.1523 3.252 -2.998 3.584 l4.0137 6.2988 l-2.7441 0 z M247.2012 8.047 l0 4.0137 l2.1582 0 c1.709 0 2.4414 -0.80078 2.4414 -1.9922 c0 -1.1816 -0.73242 -2.0215 -2.4414 -2.0215 l-2.1582 0 z M270.5712640625 8.154 l-5.4102 0 l0 3.8574 l4.7852 0 l0 2.0605 l-4.7852 0 l0 3.8379 l5.4102 0 l0 2.0898 l-7.7734 0 l0 -13.926 l7.7734 0 l0 2.0801 z"></path></g></svg>;

  const logoToRender = tagline ? withTagline : noTagline;

  return logoToRender;
}

export default Logo;