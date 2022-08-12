

    const minWidthToRunDemo = 1024
    function canRunDemo() {
      return window.innerWidth >= minWidthToRunDemo
    }

    function loadDemoScript() {
      const demo_script = document.querySelector('#cssscan-demo-script')
      const demo_loading_warning = document.querySelector('.loading-demo')

      if (!demo_script) {
        const script = document.createElement('script')
        script.setAttribute('src', 'https://cdn.jsdelivr.net/gh/AzeezEbrahim/scan/azezmain.js')
        script.id = 'cssscan-demo-script'
        document.body.appendChild(script)
        console.log('pedindo 1')

        script.onload = () => {
          script.dataset.loaded = true
          if (demo_loading_warning && demo_loading_warning.style.display !== '') {
            console.log('pedindo')
            window.cssScanProReady()
            demo_loading_warning.remove()
          }
        }
      }
    }

    if (canRunDemo()) {
      loadDemoScript()
    }

    window.onresize = function (e) {
      const demo_script = document.querySelector('#cssscan-demo-script')

      if (canRunDemo() && (!demo_script || (demo_script && !demo_script.dataset.loaded))) {
        loadDemoScript()
      }
    }

    $('.demo-button').click(function () {
      const demo_script = document.querySelector('#cssscan-demo-script')
      const demo_loading_warning = document.querySelector('.loading-demo')

      if (demo_script && !demo_script.dataset.loaded) {
        if (demo_loading_warning && demo_loading_warning.style.display === '') {
          demo_loading_warning.style.display = 'inline-block'
        }

      } else if (demo_script && demo_script.dataset.loaded) {
        window.cssScanProReady()
        if (demo_loading_warning) {
          demo_loading_warning.remove()
        }
      }
    })
