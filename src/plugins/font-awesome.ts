import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faInstagram)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
