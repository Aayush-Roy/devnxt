// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import colors from '../utils/colors';

// const FilterChip = ({ label, selected, onPress }) => {
//   return (
//     <TouchableOpacity
//       style={[
//         styles.chip,
//         selected && styles.selectedChip
//       ]}
//       onPress={onPress}
//     >
//       <Text style={[
//         styles.chipText,
//         selected && styles.selectedChipText
//       ]}>
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   chip: {
//     backgroundColor: colors.card,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: colors.border,
//   },
//   selectedChip: {
//     backgroundColor: colors.primary,
//     borderColor: colors.primary,
//   },
//   chipText: {
//     color: colors.text,
//     fontSize: 14,
//   },
//   selectedChipText: {
//     color: colors.text,
//     fontWeight: 'bold',
//   },
// });

// export default FilterChip;
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';


const FilterChip = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, selected ? styles.selectedChip : styles.unselectedChip]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.chipText, selected && styles.selectedChipText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};



// const styles = StyleSheet.create({
//   chip: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,

//     // Softer shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.12,
//     shadowRadius: 2,
//     elevation: 2,
//   },

//   unselectedChip: {
//     backgroundColor: colors.card,
//     borderWidth: 1,
//     borderColor: colors.border,
//   },

//   selectedChip: {
//     backgroundColor: colors.primary,
//     borderWidth: 0,

//     // Better lifted look
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 4,
//   },

//   chipText: {
//     fontSize: 14,
//     color: colors.text,
//   },

//   selectedChipText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });
const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },

  unselectedChip: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  selectedChip: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  chipText: {
    fontSize: 14,
    color: colors.text,
  },

  selectedChipText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default FilterChip;
