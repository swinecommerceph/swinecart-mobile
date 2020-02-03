export function combineStatData(...params) {
  return params.reduce((a, e) => {

    a.boar += e.boar;
    a.semen += e.semen;
    a.sow += e.sow;
    a.gilt += e.gilt;

    return a;

  }, { boar: 0, semen: 0, sow: 0, gilt: 0 });
}