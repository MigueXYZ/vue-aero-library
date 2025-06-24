export { default as DarkAeroButton } from '@/components/dark-aero/DarkAeroButton.vue'
export { default as DarkAeroBalloon } from '@/components/dark-aero/DarkAeroBalloon.vue'
export { default as DarkAeroCheckbox } from '@/components/dark-aero/DarkAeroCheckbox.vue'
export { default as DarkAeroCodeBlock } from '@/components/dark-aero/DarkAeroCodeBlock.vue'
export { default as DarkAeroSidebar } from '@/components/dark-aero/DarkAeroSidebar.vue'
export { default as DarkAeroTable } from '@/components/dark-aero/DarkAeroTable.vue'

export default {
    install(app){
        app.component('DarkAeroButton', DarkAeroButton)
        app.component('DarkAeroBalloon', DarkAeroBalloon)
        app.component('DarkAeroCheckbox', DarkAeroCheckbox)
        app.component('DarkAeroCodeBlock', DarkAeroCodeBlock)
        app.component('DarkAeroSidebar', DarkAeroSidebar)
        app.component('DarkAeroTable', DarkAeroTable)
    }
}