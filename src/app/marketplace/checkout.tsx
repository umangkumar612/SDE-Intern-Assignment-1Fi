import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CheckoutScreen() {
  const { productId, variant, emiMonths, monthlyEmi } = useLocalSearchParams();
  const [paymentMethod, setPaymentMethod] = useState('mutual');

  const methods = [
    {
      id: 'mutual',
      icon: 'wallet-outline',
      title: 'Mutual Fund Balance',
      subtitle: 'Pay using your mutual fund investments',
    },
    {
      id: 'upi',
      icon: 'phone-portrait-outline',
      title: 'UPI',
      subtitle: 'Pay using any UPI app',
    },
    {
      id: 'bank',
      icon: 'business-outline',
      title: 'Net Banking',
      subtitle: 'Pay securely through your bank',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#17171C" />
          <Text style={styles.backText}>Payment</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Complete your purchase</Text>
        <Text style={styles.subtitle}>Choose how you want to proceed with your EMI.</Text>

        <View style={styles.orderCard}>
          <View style={styles.productIcon}>
            <Ionicons name="bag-outline" size={28} color="#6D2CCF" />
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.productTitle}>Selected Product</Text>
            <Text style={styles.variant}>{variant || '128 GB'}</Text>
          </View>
          <View style={styles.orderAmount}>
            <Text style={styles.amount}>₹{monthlyEmi || '6,667'}</Text>
            <Text style={styles.month}>/month</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>EMI Summary</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>EMI Tenure</Text>
            <Text style={styles.summaryValue}>{emiMonths || '12'} Months</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Monthly EMI</Text>
            <Text style={styles.summaryValue}>₹{monthlyEmi || '6,667'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Interest</Text>
            <Text style={styles.free}>₹0</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Processing Fee</Text>
            <Text style={styles.free}>₹0</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        {methods.map(method => {
          const selected = paymentMethod === method.id;

          return (
            <TouchableOpacity
              key={method.id}
              activeOpacity={0.85}
              onPress={() => setPaymentMethod(method.id)}
              style={[styles.methodCard, selected && styles.methodCardSelected]}
            >
              <View style={[styles.methodIcon, selected && styles.methodIconSelected]}>
                <Ionicons
                  name={method.icon as any}
                  size={24}
                  color={selected ? '#6D2CCF' : '#666670'}
                />
              </View>

              <View style={styles.methodInfo}>
                <Text style={styles.methodTitle}>{method.title}</Text>
                <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
              </View>

              <View style={[styles.radio, selected && styles.radioSelected]}>
                {selected && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.security}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#6D2CCF" />
          <Text style={styles.securityText}>Your payment is secure and encrypted.</Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.bottomLabel}>Monthly EMI</Text>
          <Text style={styles.bottomAmount}>₹{monthlyEmi || '6,667'}</Text>
        </View>

        <TouchableOpacity
          style={styles.payButton}
          onPress={() => router.push('/marketplace/payment')}
        >
          <Text style={styles.payText}>Continue to Pay</Text>
          <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  content: {
    paddingBottom: 110,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#17171C',
  },
  title: {
    marginHorizontal: 20,
    marginTop: 8,
    fontSize: 26,
    fontWeight: '700',
    color: '#17171C',
  },
  subtitle: {
    marginHorizontal: 20,
    marginTop: 7,
    fontSize: 14,
    color: '#73737C',
  },
  orderCard: {
    margin: 20,
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productIcon: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: '#F1ECFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderInfo: {
    flex: 1,
    marginLeft: 13,
  },
  productTitle: {
    fontSize: 13,
    color: '#73737C',
  },
  variant: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '600',
    color: '#17171C',
  },
  orderAmount: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 17,
    fontWeight: '700',
    color: '#6D2CCF',
  },
  month: {
    marginTop: 2,
    fontSize: 11,
    color: '#73737C',
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  summaryCard: {
    marginHorizontal: 20,
    padding: 17,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#73737C',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#17171C',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEF',
    marginVertical: 9,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#17171C',
  },
  free: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E8B57',
  },
  methodCard: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodCardSelected: {
    borderColor: '#6D2CCF',
    backgroundColor: '#F7F2FC',
  },
  methodIcon: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: '#F3F3F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodIconSelected: {
    backgroundColor: '#EDE2FA',
  },
  methodInfo: {
    flex: 1,
    marginLeft: 12,
  },
  methodTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#17171C',
  },
  methodSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#777780',
  },
  radio: {
    width: 21,
    height: 21,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#B5B5BD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#6D2CCF',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6D2CCF',
  },
  security: {
    marginHorizontal: 20,
    marginTop: 12,
    padding: 14,
    borderRadius: 13,
    backgroundColor: '#F1ECFA',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  securityText: {
    flex: 1,
    fontSize: 12,
    color: '#5F526C',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomLabel: {
    fontSize: 11,
    color: '#777780',
  },
  bottomAmount: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  payButton: {
    paddingHorizontal: 19,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#6D2CCF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  payText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});