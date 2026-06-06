import { ScrollView, StyleSheet, Text } from "react-native";

import DevotionalCard from "../../components/DevotionalCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SanatanSphere</Text>

      <Text style={styles.quote}>जय श्री राम 🙏</Text>

      <DevotionalCard title="Hanuman Chalisa" subtitle="Listen & Read" />

      <DevotionalCard title="Aarti Collection" subtitle="Daily Aartis" />

      <DevotionalCard title="Meditation" subtitle="Peaceful Audio" />

      <DevotionalCard title="Bhajans" subtitle="Devotional Music" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 50,
  },

  quote: {
    fontSize: 18,
    marginVertical: 25,
  },
});
