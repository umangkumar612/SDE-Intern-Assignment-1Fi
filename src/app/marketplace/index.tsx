import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { categories, products } from '@/data/marketplace';


export default function MarketplaceScreen() {
  const { width } = useWindowDimensions();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const columns = width >= 700 ? 2 : 1;

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>1Fi Marketplace</Text>
          <Text style={styles.subtitle}>Shop now. Pay later with your mutual funds.</Text>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={21} color="#8C8C96" />
        <TextInput
  placeholder="Search products..."
  placeholderTextColor="#9999A3"
  style={styles.searchInput}
  value={search}
  onChangeText={setSearch}
/>
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={20} color="#9B9BA4" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {categories.map(category => {
            const active = selectedCategory === category.name;

            return (
              <TouchableOpacity
                key={category.name}
                onPress={() => setSelectedCategory(category.name)}
                style={[styles.category, active && styles.categoryActive]}
              >
                <Ionicons
                  name={category.icon}
                  size={25}
                  color={active ? '#6D2CCF' : '#666670'}
                />
                <Text style={[styles.categoryName, active && styles.categoryNameActive]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.productHeader}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
         <TouchableOpacity onPress={() => {
  setSearch('');
  setSelectedCategory('All');
}}>
  <Text style={styles.viewAll}>View all</Text>
</TouchableOpacity>
        </View>

        {filteredProducts.length > 0 ? (
          <View style={[styles.products, columns === 2 && styles.productsDesktop]}>
            {filteredProducts.map(product => (
              <TouchableOpacity
                key={product.id}
                activeOpacity={0.92}
                style={[styles.productCard, columns === 2 && styles.productCardDesktop]}
                onPress={() =>
                  router.push({
                    pathname: '/marketplace/[id]',
                    params: { id: product.id },
                  })
                }
              >
                <View style={styles.productImage}>
                  <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={1}>
                    {product.name}
                  </Text>

                  <Text style={styles.price}>{product.price}</Text>

                  <View style={styles.emiRow}>
                    <Text style={styles.emi}>{product.emi}</Text>
                    <View style={styles.noCostBadge}>
                      <Text style={styles.noCostText}>NO-COST EMI</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.empty}>
            <Ionicons name="search-outline" size={42} color="#A4A4AD" />
            <Text style={styles.emptyTitle}>No products found</Text>
            <Text style={styles.emptyText}>Try another product or category.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#17171C',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#74747D',
  },
  searchBox: {
    height: 54,
    marginHorizontal: 20,
    paddingHorizontal: 17,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#17171C',
  },
  sectionHeader: {
    marginTop: 25,
  },
  sectionTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#17171C',
  },
  categories: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 2,
    gap: 10,
  },
  category: {
    width: 82,
    height: 88,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryActive: {
    backgroundColor: '#F1EAF9',
    borderColor: '#6D2CCF',
  },
  categoryName: {
    marginTop: 7,
    fontSize: 11,
    color: '#55555E',
  },
  categoryNameActive: {
    color: '#6D2CCF',
    fontWeight: '600',
  },
  productHeader: {
    marginTop: 28,
    marginBottom: 14,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewAll: {
    color: '#6D2CCF',
    fontSize: 13,
    fontWeight: '600',
  },
  products: {
    paddingHorizontal: 20,
    gap: 14,
  },
  productsDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E8',
  },
  productCardDesktop: {
    width: '48.8%',
  },
  productImage: {
    height: 210,
    margin: 10,
    borderRadius: 14,
    backgroundColor: '#F1ECFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '78%',
    height: '78%',
  },
  productInfo: {
    paddingHorizontal: 14,
    paddingBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#17171C',
  },
  price: {
    marginTop: 7,
    fontSize: 18,
    fontWeight: '700',
    color: '#17171C',
  },
  emiRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emi: {
    fontSize: 13,
    color: '#6D2CCF',
    fontWeight: '600',
  },
  noCostBadge: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#F1ECFA',
  },
  noCostText: {
    fontSize: 8,
    color: '#6D2CCF',
    fontWeight: '700',
  },
  empty: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 50,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E4E8',
  },
  emptyTitle: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: '600',
    color: '#17171C',
  },
  emptyText: {
    marginTop: 5,
    fontSize: 13,
    color: '#777780',
  },
});