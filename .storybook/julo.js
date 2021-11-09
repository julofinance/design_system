import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: '#29b1f0',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'black',
    barBg: '#29b1f0',

    // Form colors
    inputBg: 'white',
    inputBorder: 'black',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Design System Julo',
    brandUrl: 'https://www.julo.co.id/',
    brandImage: 'https://www.julo.co.id/assets/vector/pinjaman_JULO_logo.svg',
  });