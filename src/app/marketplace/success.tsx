import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="checkmark" size={52} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>Payment successful!</Text>
      <Text style={styles.subtitle}>
        Your purchase has been confirmed and your EMI plan is now active.
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Order Status</Text>
          <View style={styles.status}>
            <Text style={styles.statusText}>Confirmed</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Payment</Text>
          <Text style={styles.value}>No-cost EMI</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>EMI Plan</Text>
          <Text style={styles.value}>12 Months</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Monthly EMI</Text>
          <Text style={styles.amount}>₹6,667</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Ionicons name="shield-checkmark-outline" size={21} color="#6D2CCF" />
        <Text style={styles.infoText}>
          Your transaction has been securely processed.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/marketplace')}
      >
        <Text style={styles.buttonText}>Back to Marketplace</Text>
        <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#6D2CCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 22,
    fontSize: 27,
    fontWeight: '700',
    color: '#17171C',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 9,
    maxWidth: 500,
    fontSize: 14,
    lineHeight: 21,
    color: '#73737C',
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 650,
    marginTop: 28,
    padding: 19,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
  },
  row: {
    minHeight: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    color: '#73737C',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#17171C',
  },
  amount: {
    fontSize: 17,
    fontWeight: '700',
    color: '#6D2CCF',
  },
  status: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#EDF7F0',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2E8B57',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEF',
    marginVertical: 6,
  },
  info: {
    width: '100%',
    maxWidth: 650,
    marginTop: 14,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#F1ECFA',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#5F526C',
  },
  button: {
    width: '100%',
    maxWidth: 650,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#6D2CCF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});