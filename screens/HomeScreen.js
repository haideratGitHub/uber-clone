import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white`}>
			<View style={tw`p-5`}>
				<Image
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
				/>
			</View>
			<GooglePlacesAutocomplete
				styles={{
					container: {
						flex: 0,
					},
					textInput: {
						fontSize: 18,
					},
				}}
				onPress={(data, details = null) => {}}
				fetchDetails={true}
				enablePoweredByContainer={false}
				minLength={2}
				query={{
					key: GOOGLE_MAPS_APIKEY,
					language: "en",
				}}
				placeholder="Where from ?"
				nearbyPlacesAPI="GooglePlacesSearch"
				debounce={400}
			></GooglePlacesAutocomplete>
			<NavOptions></NavOptions>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
