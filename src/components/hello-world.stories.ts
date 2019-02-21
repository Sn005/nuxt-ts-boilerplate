/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import HelloWorld from '@/components/HelloWorld.vue'

storiesOf('HelloWorld', module).add('with text', () => ({
  components: { HelloWorld },
  template: '<HelloWorld>',
  methods: { action: action('clicked') }
}))
