type helmetProps = {
  titlehelmet:string
}

export default function changeHelmet({titlehelmet}:helmetProps) {
    const helmettitle = document.getElementById('helmettitle')
    if (helmettitle){
      helmettitle.innerText = titlehelmet
    }
}
