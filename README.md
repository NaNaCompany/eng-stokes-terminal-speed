# 스톡스 입자 종단속도 계산기

매우 작은 입자 레이놀즈수에서 구형 입자의 종단속도 계산

- Plan ID: E097
- App: https://nanalab.kr/eng-stokes-terminal-speed/
- Repository: https://github.com/NaNaCompany/eng-stokes-terminal-speed
- Formula: `v_t = (ρ_p−ρ_f)gd²/(18μ)`
- Output: 아래 방향 양수 종단속도 v_t

## Model

ρ_p,ρ_f,g,d,μ>0. 구형 입자·뉴턴 유체·정상 크리핑 유동·벽면 영향 무시를 가정한다. 지름을 입력하며 가벼운 입자의 상승은 음수다. 이 앱은 결과로 계산한 입자 Re<0.1에서만 출력한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `5.55555555555556e-05`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
