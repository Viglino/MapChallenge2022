import ol_ext_element from 'ol-ext/util/element'

import './style.css'

const galery = document.querySelector('ul.galery')

document.querySelectorAll('ul.list a').forEach(a => {
  const li = ol_ext_element.create('LI', {
    html: ol_ext_element.create('IMG', {
      src: a.href.replace(/html$/, 'png'),
      title: a.innerText,
      click: () => {
        window.location = a.href
      }
    }),
    parent: galery
  })
  ol_ext_element.create('LABEL', {
    text: a.innerText,
    parent: li
  })
})