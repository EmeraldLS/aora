import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className=" w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className=" max-w-[300px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className=" text-3xl font-bold text-white text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200 text0-center font-bold">
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              className=" w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={"Continue with Email"}
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
