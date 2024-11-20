import React, { useState } from "react";
import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";

const RandomDuelPicker = () => {
  const playerNames = [
    "Ruxshona", "Shahrizoda", "O.Dilnura", "Q.Dilnura", "Mirjalol",
    "Abror", "Sarvar", "Artur", "Zebiniso", "Noila",
    "Maftuna", "Quvonchoy", "Bahodir", "Temur", "Sitora",
    "Mailka", "Og`abek", "R.Behruz", "Bobur", "Mahmudali",
    "Xurramshoh", 
  ];

  const [remainingPlayers, setRemainingPlayers] = useState(playerNames);
  const [duels, setDuels] = useState([]);

  const generateDuel = () => {
    if (remainingPlayers.length < 2) return;

    // Pick two random players
    const randomIndex1 = Math.floor(Math.random() * remainingPlayers.length);
    const player1 = remainingPlayers[randomIndex1];
    const updatedPlayers = remainingPlayers.filter((_, index) => index !== randomIndex1);

    const randomIndex2 = Math.floor(Math.random() * updatedPlayers.length);
    const player2 = updatedPlayers[randomIndex2];

    // Update state
    setDuels((prevDuels) => [...prevDuels, { player1, player2 }]);
    setRemainingPlayers(updatedPlayers.filter((_, index) => index !== randomIndex2));
  };

  return (
    <Box
      bgImage="url('https://img.freepik.com/premium-photo/book-drawing-images-background-copy-space_1179130-578163.jpg')"
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
    >
      <VStack spacing={6} mt={10} px={4}>
        {/* Generate Duel Button */}
        <Button
          onClick={generateDuel}
          colorScheme="teal"
          isDisabled={remainingPlayers.length < 2}
          color="white"
          _hover={{ bg: "teal.600" }}
        >
          {remainingPlayers.length < 2 ? "No Players Left" : "Generate Duel"}
        </Button>

        {/* Duels List */}
        <VStack w="300px" spacing={3} align="stretch">
          <Text 
            fontSize="xl" 
            fontWeight="bold" 
            textAlign="center" 
            color="white" 
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            Duels for Literature
          </Text>
          {duels.length > 0 ? (
            duels.map((duel, index) => (
              <HStack
                key={index}
                justify="space-between"
                bg="rgba(255, 255, 255, 0.7)"
                p={3}
                borderRadius="md"
                boxShadow="sm"
              >
                <Text color="black" fontWeight="bold" textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)">
                  {duel.player1}
                </Text>
                <Text color="black" fontWeight="bold" textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)">
                  VS
                </Text>
                <Text color="black" fontWeight="bold" textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)">
                  {duel.player2}
                </Text>
              </HStack>
            ))
          ) : (
            <Text color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)">
              No duels generated yet.
            </Text>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default RandomDuelPicker;
