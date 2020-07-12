import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/assets/styles/global';

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles;
