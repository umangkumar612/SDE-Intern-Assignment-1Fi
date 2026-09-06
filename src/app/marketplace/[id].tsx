import { useLocalSearchParams, router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { products } from '@/data/marketplace';
const emiPlans = [6, 12, 18, 24];
export default function ProductDetailsScreen() {
    const { id } = useLocalSearchParams();
const product = products.find(item => item.id === String(id)) || products[0];
const price = Number(product.price);
const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
const [selectedEmi, setSelectedEmi] = useState(12);

const monthlyEmi = Math.round(price / selectedEmi);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.image}>
        <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain" />
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹{price.toLocaleString('en-IN')}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionTitle}>Select Variant</Text>

          <View style={styles.options}>
            {product.variants.map(variant => (
              <TouchableOpacity
                key={variant}
                onPress={() => setSelectedVariant(variant)}
                style={[
                  styles.option,
                  selectedVariant === variant && styles.selectedOption,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedVariant === variant && styles.selectedOptionText,
                  ]}
                >
                  {variant}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Choose EMI Plan</Text>

          {emiPlans.map(months => {
         const emi = Math.round(price / months);

            return (
              <TouchableOpacity
                key={months}
                onPress={() => setSelectedEmi(months)}
                style={[
                  styles.emiCard,
                  selectedEmi === months && styles.selectedEmiCard,
                ]}
              >
                <View style={styles.radio}>
                  {selectedEmi === months && <View style={styles.radioSelected} />}
                </View>

                <View style={styles.emiInfo}>
                  <Text style={styles.emiTitle}>{months} Months</Text>
                  <Text style={styles.emiAmount}>
                    ₹{emi.toLocaleString('en-IN')}/month
                  </Text>
                </View>

                <Text style={styles.noCost}>No-cost EMI</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.bottomLabel}>Monthly EMI</Text>
          <Text style={styles.bottomPrice}>
            ₹{monthlyEmi.toLocaleString('en-IN')}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.proceed}
          onPress={() => router.push(`/marketplace/checkout`)}
        >
          <Text style={styles.proceedText}>Proceed with EMI</Text>
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
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 12,
  },
  backText: {
    fontSize: 17,
    color: '#6D2CCF',
    fontWeight: '600',
  },
 image: {
  height: 280,
  marginHorizontal: 20,
  borderRadius: 22,
  backgroundColor: '#F0EAF9',
  alignItems: 'center',
  justifyContent: 'center',
},
productImage: {
  width: '80%',
  height: '80%',
},
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  name: {
    fontSize: 27,
    fontWeight: '700',
    color: '#17171C',
  },
  price: {
    marginTop: 8,
    fontSize: 23,
    fontWeight: '700',
    color: '#17171C',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: '#707078',
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDE2',
  },
  selectedOption: {
    borderColor: '#6D2CCF',
    backgroundColor: '#F2EBFA',
  },
  optionText: {
    fontSize: 14,
    color: '#55555E',
  },
  selectedOptionText: {
    color: '#6D2CCF',
    fontWeight: '600',
  },
  emiCard: {
    minHeight: 70,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E2E6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedEmiCard: {
    borderColor: '#6D2CCF',
    backgroundColor: '#F5F0FA',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6D2CCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6D2CCF',
  },
  emiInfo: {
    flex: 1,
    marginLeft: 12,
  },
  emiTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#17171C',
  },
  emiAmount: {
    marginTop: 3,
    fontSize: 13,
    color: '#6D2CCF',
  },
  noCost: {
    fontSize: 11,
    color: '#73737C',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
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
  bottomPrice: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  proceed: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#6D2CCF',
  },
  proceedText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});