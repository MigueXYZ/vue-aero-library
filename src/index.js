export { default as DarkAeroButton } from '@/components/DarkAeroButton.vue'
export { default as DarkAeroBalloon } from '@/components/DarkAeroBalloon.vue'
export { default as DarkAeroCheckbox } from '@/components/DarkAeroCheckbox.vue'
export { default as DarkAeroCodeBlock } from '@/components/DarkAeroCodeBlock.vue'
export { default as DarkAeroSidebar } from '@/components/DarkAeroSidebar.vue'
export { default as DarkAeroTable } from '@/components/DarkAeroTable.vue'

import './style.css'

export default {
    install(app){
        app.component('DarkAeroButton', require(DarkAeroButton).default || DarkAeroButton)
        app.component('DarkAeroBalloon', require(DarkAeroBalloon).default || DarkAeroBalloon)
        app.component('DarkAeroCheckbox', require(DarkAeroCheckbox).default || DarkAeroCheckbox)
        app.component('DarkAeroCodeBlock', require(DarkAeroCodeBlock).default || DarkAeroCodeBlock)
        app.component('DarkAeroSidebar', require(DarkAeroSidebar).default || DarkAeroSidebar)
        app.component('DarkAeroTable', require(DarkAeroTable).default || DarkAeroTable)
    }
}