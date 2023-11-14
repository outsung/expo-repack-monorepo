import { Text, View, useColorScheme, StyleSheet } from "react-native";

interface SectionProps {
  children: React.ReactNode;
  title: string
}
export function Section({ children, title } : SectionProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? "#FFF" : "#000",
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.description,
          {
            color: isDarkMode ? "#CCC" : "#000",
          },
        ]}>
        {children}
      </Text>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
