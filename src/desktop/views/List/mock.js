function gA() {
  const l = Math.ceil(Math.random() * 2)
  return new Array(l)
    .join(',')
    .split(',')
    .map((n, i) => i + 1)
}
const amenMap = {
  1: 'fas fa-wifi',
  2: 'fas fa-smoking-ban',
}
function Hotel() {
  this.images = [
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
  ]
  this.name = 'Sheraton Grand London Park Lane'
  this.star_rating = Math.ceil(Math.random() * 5)
  this.address = 'Westminster Borough'
  this.city = 'London'
  this.nights = Math.ceil(Math.random() * 3)
  this.rating = 8.9
  this.reviews = Math.ceil(Math.random() * 200)
  this.freeCanel = Math.ceil(Math.random() * 2) > 1
  this.Amenities = gA()
  this.remain = Math.ceil(Math.random() * 100)
}
function Dest() {
  this.address = 'East London'
  this.distance = 2.2
  this.properties = Math.ceil(Math.random() * 20000)
}
function HG(n = 10) {
  return new Array(n)
    .join(',')
    .split(',')
    .map(n => new Hotel())
}
function DG(n = 10) {
  return new Array(n)
    .join(',')
    .split(',')
    .map(m => new Dest())
}
export { DG, HG }
