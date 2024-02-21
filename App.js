import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [productList, setProductList] = useState([]);

  
  const DATA = [
    {
      id: "1",
      name:  "headphone apple",
    }
  ];

  
  const handleAddCounter = () => setCounter(counter + 1);

  
  const handleAddProduct = () => {
    if (searchText.trim() !== '') {
      const newProduct = {
        id: Date.now(),
        name: searchText.trim(),
      };

      setProductList([...productList, newProduct]);
      setSearchText('');
    }
  };


  const renderProductItem = ({ item }) => (
    <Text key={item.id} style={styles.products}>
      {item.name}
    </Text>
  );

  
  useState(() => {
    setProductList([]);
  }, []);

  return (
    <View style={styles.container}>
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
          placeholder='search product'
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
      <StatusBar style="auto" />
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
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
  }
});
