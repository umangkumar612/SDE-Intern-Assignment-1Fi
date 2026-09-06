import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentScreen() {
  const { monthlyEmi, emiMonths } = useLocalSearchParams();

  const amount = monthlyEmi || '6,667';
  const months = emiMonths || '12';

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#17171C" />
          <Text style={styles.backText}>Payment</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Make your payment</Text>
        <Text style={styles.subtitle}>Complete your purchase securely.</Text>

        <View style={styles.amountCard}>
          <View style={styles.amountIcon}>
            <Ionicons name="card-outline" size={30} color="#6D2CCF" />
          </View>
          <Text style={styles.amountLabel}>Monthly EMI</Text>
          <Text style={styles.amount}>₹{amount}</Text>
          <Text style={styles.amountSub}>for {months} months</Text>
          <View style={styles.noCostBadge}>
            <Ionicons name="checkmark-circle" size={15} color="#2E8B57" />
            <Text style={styles.noCostText}>No-cost EMI</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Payment Details</Text>

        <View style={styles.detailCard}>
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Ionicons name="wallet-outline" size={21} color="#6D2CCF" />
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailTitle}>Mutual Fund Payment</Text>
              <Text style={styles.detailSubtitle}>Amount will be secured against your investments</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Ionicons name="shield-checkmark-outline" size={21} color="#6D2CCF" />
            </View>
            <View style={styles.detailInfo}>
              <Text style={styles.detailTitle}>Secure transaction</Text>
              <Text style={styles.detailSubtitle}>Your investment details remain protected</Text>
            </View>
          </View>
        </View>

        <View style={styles.notice}>
          <Ionicons name="information-circle-outline" size={21} color="#6D2CCF" />
          <Text style={styles.noticeText}>
            By continuing, you authorize the EMI payment against your eligible mutual fund balance.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.bottomLabel}>Pay monthly</Text>
          <Text style={styles.bottomAmount}>₹{amount}</Text>
        </View>

        <TouchableOpacity
          style={styles.payButton}
          onPress={() => router.push('/marketplace/success')}
        >
          <Text style={styles.payText}>Pay & Continue</Text>
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
    fontSize: 27,
    fontWeight: '700',
    color: '#17171C',
  },
  subtitle: {
    marginHorizontal: 20,
    marginTop: 7,
    fontSize: 14,
    color: '#73737C',
  },
  amountCard: {
    margin: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
    alignItems: 'center',
  },
  amountIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F1ECFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountLabel: {
    marginTop: 15,
    fontSize: 13,
    color: '#73737C',
  },
  amount: {
    marginTop: 5,
    fontSize: 32,
    fontWeight: '700',
    color: '#17171C',
  },
  amountSub: {
    marginTop: 3,
    fontSize: 13,
    color: '#73737C',
  },
  noCostBadge: {
    marginTop: 15,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#EDF7F0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  noCostText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E8B57',
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  detailCard: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1ECFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailInfo: {
    flex: 1,
    marginLeft: 12,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#17171C',
  },
  detailSubtitle: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: '#777780',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEF',
    marginVertical: 15,
  },
  notice: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#F1ECFA',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
  },
  noticeText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
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
    paddingHorizontal: 18,
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