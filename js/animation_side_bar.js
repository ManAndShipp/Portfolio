let maxy = 100;
let miny = -200;

let classremove = () => {
  if (
    document
    .getElementById('dpersonal')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('dpersonal')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('apersonal')
      .classList.remove('sidebar_links_link-o');
  }
  if (
    document
    .getElementById('dexperience')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('dexperience')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('aexperience')
      .classList.remove('sidebar_links_link-o');
  }
  if (
    document
    .getElementById('dskills')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('dskills')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('askills')
      .classList.remove('sidebar_links_link-o');
  }
  if (
    document
    .getElementById('deducation')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('deducation')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('aeducation')
      .classList.remove('sidebar_links_link-o');
  }
  if (
    document
    .getElementById('dprojects')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('dprojects')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('aprojects')
      .classList.remove('sidebar_links_link-o');
  }
  if (
    document
    .getElementById('dcommunication')
    .classList.contains('sidebar_links_line-o')
  ) {
    document
      .getElementById('dcommunication')
      .classList.remove('sidebar_links_line-o');
    document
      .getElementById('acommunication')
      .classList.remove('sidebar_links_link-o');
  }
};
document.onscroll = () => {
  if (
    document.getElementById('skill').getBoundingClientRect().top < maxy &&
    document.getElementById('skill').getBoundingClientRect().top > miny
  ) {
    classremove();
    document
      .getElementById('dskills')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('askills')
      .classList.add('sidebar_links_link-o');
  }

  if (
    document.getElementById('personal').getBoundingClientRect().top < maxy &&
    document.getElementById('personal').getBoundingClientRect().top > miny
  ) {
    classremove();
    document
      .getElementById('dpersonal')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('apersonal')
      .classList.add('sidebar_links_link-o');
  }

  if (
    document.getElementById('experience').getBoundingClientRect().top < maxy &&
    document.getElementById('experience').getBoundingClientRect().top > miny
  ) {
    classremove();
    document
      .getElementById('dexperience')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('aexperience')
      .classList.add('sidebar_links_link-o');
  }

  if (
    document.getElementById('education').getBoundingClientRect().top < maxy &&
    document.getElementById('education').getBoundingClientRect().top > miny
  ) {
    classremove();
    document
      .getElementById('deducation')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('aeducation')
      .classList.add('sidebar_links_link-o');
  }

  if (
    document.getElementById('projects').getBoundingClientRect().top < maxy &&
    document.getElementById('projects').getBoundingClientRect().top > miny - 200
  ) {
    classremove();
    document
      .getElementById('dprojects')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('aprojects')
      .classList.add('sidebar_links_link-o');
  }

  if (
    document.getElementById('communication').getBoundingClientRect().top <
    maxy + 300 &&
    document.getElementById('communication').getBoundingClientRect().top >
    miny
  ) {
    classremove();
    document
      .getElementById('dcommunication')
      .classList.add('sidebar_links_line-o');
    document
      .getElementById('acommunication')
      .classList.add('sidebar_links_link-o');
  }
};