import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExternalLinkAlt);
library.add(faTwitter, faGithub, faInstagram)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
