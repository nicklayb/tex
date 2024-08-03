const TEXT_PARAM = "text"
const CONTENT_SELECTOR = "#content"
const DEFAULT_TEXT = "Provider a ?text= query to display it"

const DEFAULT_SIZE = 2;
const FONT_SIZES = [
  [15, 10],
  [30, 7],
  [50, 4]
]

const findFontSize = (sizes, length) => {
  if (sizes.length == 0) {
    return DEFAULT_SIZE
  }

  const [[check, value], ...rest] = sizes
  if (length <= check) {
    return value
  }

  return findFontSize(rest, length)
}

const fontSize = text => {
  const fontSize = findFontSize(FONT_SIZES, text.length);

  return `${fontSize}rem`;
}

const update = text => {
  const content = document.querySelector(CONTENT_SELECTOR)

  content.innerHTML = text

  content.style.fontSize = fontSize(text)
}

const getText = query => {
  const params = new URLSearchParams(query)
  return params.get(TEXT_PARAM) || DEFAULT_TEXT
}
const text = getText(window.location.search)
update(text)
