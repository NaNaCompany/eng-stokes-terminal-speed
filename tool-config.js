export const tool={
  "id": "E097",
  "slug": "eng-stokes-terminal-speed",
  "title": "스톡스 입자 종단속도 계산기",
  "title_en": "Stokes Particle Terminal Velocity Calculator",
  "category": "유체",
  "category_en": "Fluid mechanics",
  "fields": [
    {
      "key": "rhop",
      "label": "입자 밀도 ρ_p",
      "label_en": "Particle density ρ_p",
      "dimension": "density",
      "example": 2000,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "2000"
    },
    {
      "key": "rhof",
      "label": "유체 밀도 ρ_f",
      "label_en": "Fluid density ρ_f",
      "dimension": "density",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1000"
    },
    {
      "key": "g",
      "label": "중력가속도 g",
      "label_en": "Gravitational acceleration g",
      "dimension": "acceleration",
      "example": 10,
      "constraint": "positive",
      "display_unit": "ms2",
      "display_value": "10"
    },
    {
      "key": "d",
      "label": "구형 입자 지름 d",
      "label_en": "Spherical particle diameter d",
      "dimension": "length",
      "example": 1e-05,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "0.01"
    },
    {
      "key": "mu",
      "label": "점성계수 μ",
      "label_en": "Dynamic viscosity μ",
      "dimension": "viscosity",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mPas",
      "display_value": "1"
    }
  ],
  "result_label": "아래 방향 양수 종단속도 v_t",
  "result_label_en": "Terminal velocity positive downward v_t",
  "result_dimension": "speed",
  "formula": "v_t = (ρ_p−ρ_f)gd²/(18μ)",
  "purpose": "매우 작은 입자 레이놀즈수에서 구형 입자의 종단속도 계산",
  "purpose_en": "Calculate terminal velocity of a small sphere in creeping flow.",
  "assumptions": "ρ_p,ρ_f,g,d,μ>0. 구형 입자·뉴턴 유체·정상 크리핑 유동·벽면 영향 무시를 가정한다. 지름을 입력하며 가벼운 입자의 상승은 음수다. 이 앱은 결과로 계산한 입자 Re<0.1에서만 출력한다.",
  "assumptions_en": "Required: positive inputs, a spherical particle, Newtonian fluid, steady creeping flow and negligible walls. Input diameter, not radius. Rising particles have negative velocity. This app requires computed particle Re<0.1.",
  "sources": [
    {
      "label": "OpenStax · College Physics 2e · 12.6 Viscous Fluid Motion",
      "url": "https://openstax.org/books/college-physics-2e/pages/12-6-motion-of-an-object-in-a-viscous-fluid"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-stokes-terminal-speed/",
  "repository": "https://github.com/NaNaCompany/eng-stokes-terminal-speed",
  "output_unit": "ms"
};
