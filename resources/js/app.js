import Alpine from 'alpinejs'

// Inclut TOUS les fichiers du dossier resources/assets/ et de ses sous-dossiers
import.meta.glob(['../assets/**'])

Alpine.data('alert', function () {
  return {
    isVisible: false,
    dismiss() {
      this.isVisible = false
    },
    init() {
      setTimeout(() => {
        this.isVisible = true
      }, 80)
      setTimeout(() => {
        this.dismiss()
      }, 5000)
    },
  }
})

Alpine.start()