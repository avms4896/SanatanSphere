import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function DevotionalCard({ title, subtitle }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    color: "#666",
  },
});
