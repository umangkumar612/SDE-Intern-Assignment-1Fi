import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md={{ default: 'home', selected: 'home_filled' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="shop">
        <NativeTabs.Trigger.Label>Shop</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'bag', selected: 'bag.fill' }} md={{ default: 'shopping_bag', selected: 'shopping_bag' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="emi-dues">
        <NativeTabs.Trigger.Label>EMI Dues</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'indianrupeesign.circle', selected: 'indianrupeesign.circle.fill' }} md={{ default: 'currency_rupee', selected: 'currency_rupee' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="limit">
        <NativeTabs.Trigger.Label>Limit</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'chart.line.uptrend.xyaxis', selected: 'chart.line.uptrend.xyaxis' }} md={{ default: 'show_chart', selected: 'show_chart' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'person', selected: 'person.fill' }} md={{ default: 'person', selected: 'person' }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}