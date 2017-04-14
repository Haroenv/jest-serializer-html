const html = `<div id="header">
  <a id="logo" href="/">
    <img src="/images/logo.png">
    <span>Vue.js</span>
  </a>
  <ul id="nav">
    <li>
  <form id="search-form">
    <input type="text" id="search-query-nav" class="search-query st-default-search-input">
  </form>
</li>
<li><a href="/v2/guide/" class="nav-link current">Guide</a></li>
<li><a href="/v2/api/" class="nav-link">API</a></li>
<li><a href="/v2/examples/" class="nav-link">Examples</a></li>
<li class="nav-dropdown-container ecosystem">
  <a class="nav-link">Ecosystem</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><h4>Help</h4></li>
    <li><ul>
      <li><a href="http://forum.vuejs.org" class="nav-link" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" class="nav-link" target="_blank">Chat</a></li>
      <li><a href="https://github.com/vuejs-templates" class="nav-link" target="_blank">Templates</a></li>
    </ul></li>
    <li><h4>News</h4></li>
    <li><ul>
      <li><a href="https://twitter.com/vuejs" class="nav-link" target="_blank">Twitter</a></li>
      <li><a href="https://medium.com/the-vue-point" class="nav-link" target="_blank">Blog</a></li>
      <li><a href="https://vuejobs.com/?ref=vuejs" class="nav-link" target="_blank">Jobs</a></li>
    </ul></li>
    <li><h4>Core Plugins</h4></li>
    <li><ul>
      <li><a href="https://router.vuejs.org/" class="nav-link" target="_blank">Vue Router</a></li>
      <li><a href="https://vuex.vuejs.org/" class="nav-link" target="_blank">Vuex</a></li>
    </ul></li>
    <li><h4>Resource Lists</h4></li>
    <li><ul>
      <li><a href="https://github.com/vuejs" class="nav-link" target="_blank">Official Repos</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" class="nav-link" target="_blank">Awesome Vue</a></li>
    </ul></li>
  </ul>
</li>



<li class="nav-dropdown-container language">
  <a class="nav-link">Translations</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><a href="https://cn.vuejs.org/" class="nav-link" target="_blank">中文</a></li>
    <li><a href="https://jp.vuejs.org/" class="nav-link" target="_blank">日本語</a></li>
    <li><a href="https://ru.vuejs.org/" class="nav-link" target="_blank">Русский</a></li>
    <li><a href="https://kr.vuejs.org/" class="nav-link" target="_blank">한국어</a></li>
  </ul>
</li>
    </ul></div>`;


test('should beautify HTML', () => {
  expect(html).toMatchSnapshot();
});

test('should only act on HTML strings', () => {
  expect('Some text without any tags.').toMatchSnapshot();
  expect({}).toMatchSnapshot();
});
