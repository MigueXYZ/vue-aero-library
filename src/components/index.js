// --- IMPORTS -------------------------------------------------
import DarkAeroButton   from './dark-aero/DarkAeroButton.vue'
import DarkAeroBalloon  from './dark-aero/DarkAeroBalloon.vue'
import DarkAeroCheckbox from './dark-aero/DarkAeroCheckbox.vue'
import DarkAeroCodeBlock from './dark-aero/DarkAeroCodeBlock.vue'
import DarkAeroSidebar  from './dark-aero/DarkAeroSidebar.vue'
import DarkAeroTable    from './dark-aero/DarkAeroTable.vue'

// --- NAMED EXPORTS ------------------------------------------
export {
  DarkAeroButton,
  DarkAeroBalloon,
  DarkAeroCheckbox,
  DarkAeroCodeBlock,
  DarkAeroSidebar,
  DarkAeroTable
}

// --- PLUGIN (DEFAULT) ---------------------------------------
export default {
  install(app) {
    app.component('DarkAeroButton',   DarkAeroButton)
    app.component('DarkAeroBalloon',  DarkAeroBalloon)
    app.component('DarkAeroCheckbox', DarkAeroCheckbox)
    app.component('DarkAeroCodeBlock',DarkAeroCodeBlock)
    app.component('DarkAeroSidebar',  DarkAeroSidebar)
    app.component('DarkAeroTable',    DarkAeroTable)
  }
}
