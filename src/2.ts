import * as styles from './styles/23.scss';

console.log(styles)
export function T () {
  console.log(T)
  const freg = document.createDocumentFragment()
  const halfCircle = document.createElement('div')
  halfCircle.classList.add('half-circle')
  freg.appendChild(halfCircle)
  const sector = document.createElement('div')
  sector.classList.add('sector')
  freg.appendChild(sector)
  const triangle = document.createElement('div')
  triangle.classList.add('triangle')
  freg.appendChild(triangle)
  const ladder = document.createElement('div')
  ladder.classList.add('ladder')
  freg.appendChild(ladder)
  document.querySelector('.app')?.appendChild(freg)
}