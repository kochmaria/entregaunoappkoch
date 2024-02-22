// App.js
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native';
import RemoveModal from './src/components/RemoveModal'; 

export default function App() {
  const [counter, setCounter] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [productList, setProductList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleAddProduct = () => {
    if (searchText.trim() !== '') {
      const newProduct = {
        id: Date.now(),
        name: searchText.trim(),
      };

      setProductList([...productList, newProduct]);
      setSearchText('');
      console.log('Nuevo producto agregado:', newProduct);
    }
  };

  const handleRemoveProduct = () => {
    if (selectedProduct) {
      const updatedProductList = productList.filter(product => product.id !== selectedProduct.id);
      setProductList(updatedProductList);
      setModalVisible(false);
      console.log('Producto eliminado:', selectedProduct);
    }
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.products}>{item.name}</Text>
      <TouchableOpacity onPress={() => {
        setSelectedProduct(item);
        setModalVisible(true);
      }}>
        <Text style={styles.removeButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        removeItem={handleRemoveProduct}
      />
      <View style={styles.header}>
        <Text style={styles.cartText}>Carrito</Text>
        <Image
          style={styles.cartIcon}
          source={{
            uri: "https://w7.pngwing.com/pngs/618/1013/png-transparent-shopping-cart-online-shopping-empty-cart-angle-logo-shopping-centre.png"
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Buscar producto'
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={productList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        style={{ flex: 1 }}
      />
      <View style={styles.counterContainer}>
        <Pressable onPress={handleAddCounter}>
          <Text style={styles.counterText}>{counter}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartText: {
    fontSize: 18,
    marginRight: 10,
  },
  cartIcon: {
    width: 30,
    height: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
  products: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
  },
});

