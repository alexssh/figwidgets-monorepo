/* Core */
const { widget } = figma
const { SVG } = widget

/* --- */

export const glyphs: IIconGlyph = {
  plus: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${color}"/></svg>`,
  more: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17V5H3V4ZM3 14H17V15H3V14ZM17 9H3V10H17V9Z" fill="${color}"/></svg>`,
  chevronUp: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${color}"/></svg>`,
  chevronDown: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${color}"/></svg>`,
  check: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${color}"/></svg>`,
  darkmode: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${color}"/></svg>`,
  descriptionNo: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${color}"/></svg>`,
  editingNo: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${color}"/></svg>`,
  checkNo: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${color}"/></svg>`,
  visible: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${color}"/></svg>`,
  hidden: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${color}"/></svg>`,
  info: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.5 9V13.5H9.5V9H10.5ZM10.75 7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7Z" fill="${color}"/></svg>`,
  settings: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${color}"/></svg>`,
  link: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0251 4.02513C12.392 2.65829 14.608 2.65829 15.9749 4.02513C17.3417 5.39196 17.3417 7.60804 15.9749 8.97487L13.8536 11.0962L13.1464 10.3891L15.2678 8.26777C16.2441 7.29146 16.2441 5.70854 15.2678 4.73223C14.2915 3.75592 12.7085 3.75592 11.7322 4.73223L9.61091 6.85355L8.90381 6.14645L11.0251 4.02513ZM8.97487 15.9749C7.60804 17.3417 5.39196 17.3417 4.02513 15.9749C2.65829 14.608 2.65829 12.392 4.02513 11.0251L6.14645 8.90381L6.85355 9.61092L4.73223 11.7322C3.75592 12.7086 3.75592 14.2915 4.73223 15.2678C5.70854 16.2441 7.29146 16.2441 8.26777 15.2678L10.3891 13.1465L11.0962 13.8536L8.97487 15.9749ZM12.4645 8.20916L11.7574 7.50205L7.4665 11.7929L8.17361 12.5L12.4645 8.20916Z" fill="${color}"/></svg>`,
  key: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.4142L8.45415 9.96006L8.23762 9.36213C8.08414 8.9383 8 8.48008 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C11.5199 12 11.0617 11.9159 10.6379 11.7624L10.0399 11.5458L5.58579 16H4V14.4142ZM3 17H6L10.2974 12.7026C10.8288 12.8951 11.4021 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 8.59785 7.10493 9.1712 7.29737 9.70263L3 14V17ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z" fill="${color}"/></svg>`,
  duplicate: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4H9C8.44772 4 8 4.44772 8 5V6H7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H14V12H15C15.5523 12 16 11.5523 16 11V5C16 4.44772 15.5523 4 15 4ZM4 9C4 8.44772 4.44772 8 5 8H11C11.5523 8 12 8.44772 12 9V15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15V9ZM3 9C3 7.89543 3.89543 7 5 7H11C12.1046 7 13 7.89543 13 9V15C13 16.1046 12.1046 17 11 17H5C3.89543 17 3 16.1046 3 15V9Z" fill="${color}"/></svg>`,
  asterisk: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4H10.5V9.13401L14.9463 6.56696L15.4463 7.43298L11.0001 9.99999L15.4463 12.567L14.9463 13.433L10.5 10.866V16H9.5V10.8661L5.05396 13.433L4.55396 12.567L9.00007 9.99999L4.55398 7.43304L5.05398 6.56702L9.5 9.13392V4Z" fill="${color}"/></svg>`,
  refresh: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.73885 3.00043L8.56784 3.47028L7.25844 7.06782L6.31875 6.7258L7.2757 4.09658C5.04631 5.12711 3.5 7.3835 3.5 10C3.5 12.9438 5.45732 15.4317 8.14262 16.2309L7.85738 17.1894C4.75971 16.2674 2.5 13.3983 2.5 10C2.5 7.06884 4.1812 4.53131 6.63123 3.2975L4.32944 2.45971L4.67146 1.52002L8.269 2.82942L8.73885 3.00043ZM11.8574 3.76911C14.5427 4.5683 16.5 7.05623 16.5 10C16.5 12.6565 14.9061 14.9417 12.6217 15.9498L13.5956 13.274L12.6559 12.932L11.3465 16.5295L11.1755 16.9994L11.6454 17.1704L15.2429 18.4798L15.5849 17.5401L13.3329 16.7204C15.8024 15.4934 17.5 12.9454 17.5 10C17.5 6.60174 15.2403 3.73257 12.1426 2.81066L11.8574 3.76911Z" fill="${color}"/></svg>`,
  ref: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 5H14.2929L4.14642 15.1464L4.85353 15.8536L15 5.70711V13H16V4.5V4H15.5H6.99998V5Z" fill="${color}"/></svg>`
}

function Icon(props: ITconProps) {
  return (
    <SVG
      name="Icon"
      height={props.size ?? 20}
      width={props.size ?? 20}
      src={glyphs[props.glyph as string](props.color as string)}
    />
  )
}

export default Icon
