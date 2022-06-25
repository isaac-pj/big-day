/*
	LG - Large Devices
	SD - Small Desktop
	MD - Medium Devices
	SM - Small Devices
	XS - Extra Small Devices
*/

export const breakPoints = {
  LG: '1224px',
  SD: '1024px',
  MD: '880px',
  SM: '760px',
  XS: '450px',
}

export const mediaQueryConstants = {
  MQ_DESKTOP: { query: `(min-device-width: ${breakPoints.LG})` },
  MQ_LAPTOP_OR_SMALLER: { query: `(max-width: ${breakPoints.SD})` },
  MQ_TABLET_OR_MOBILE: { query: `(max-width: ${breakPoints.MD})` },
  MQ_SMALL_OR_MOBILE: { query: `(max-width: ${breakPoints.SM})` },
  MQ_TABLET: { query: `(min-device-width: ${breakPoints.SM})` },
  MQ_MOBILE: { query: `(max-width: ${breakPoints.XS})` },
}
