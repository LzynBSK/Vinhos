import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ImageBackground } from 'react-native-web';

const vinhos = [
  {
    id: '1',
    nome: 'Chatigny Chardonnay',
    imagem: require('../../assets/vinho-branco.jpg'),
    descricao: 'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
  },
  {
    id: '2',
    nome: 'Concha y Toro Exportacion',
    imagem: require('../../assets/vinho-rose.jpg'),
    descricao: 'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.',
  },
  {
    id: '3',
    nome: "Portada Winemaker's",
    imagem: require('../../assets/vinho-seco.jpg'),
    descricao: 'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.',
  },
  {
    id: '4',
    nome: 'Elvio Cogno Ravera Barolo',
    imagem: require('../../assets/vinho-especial.jpg'),
    descricao: 'Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.',
  },
];

const VinhosList = () => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <ImageBackground source={item.imagem} style={{ width: 60, height: 60 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item.nome}</Text>
      <Text>{item.descricao}</Text>
    </View>
  );
    return (
      <FlatList
        data={vinhos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  export default VinhosList;