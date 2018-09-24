const ThicknessHelper = (tunit = 'px', runit = tunit, bunit = tunit, lunit = runit) => (t = 0, r = t, b = t, l = r) => `${t}${tunit} ${r}${runit} ${b}${bunit} ${l}${lunit}`;

export default ThicknessHelper;
