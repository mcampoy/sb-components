import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomLabel } from "../../components/CustomLabel";

export default {
  title: 'UI/CustomLabel',
  component: CustomLabel,
  argTypes: {
    color: { control: 'select' },
    size: { control: 'select' },
    customFontColor: { control: 'color' }
  }
} as ComponentMeta<typeof CustomLabel>

const Template: ComponentStory<typeof CustomLabel> = (args) => {
  return <CustomLabel {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  customFontColor: '#5517ac',
  size: 'h1'
}
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  backgroundColor: '#000000',
  customFontColor: '#fcfcfc',
  size: 'h1'
}
