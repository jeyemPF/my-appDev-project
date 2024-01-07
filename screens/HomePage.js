import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
  TouchableOpacity,

} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../styles/HomeScreenStyles";
import PEOPLE from "../src/PEOPLE";







export default function HomePage({ navigation }){

  const [isLiked, setIsLiked] = useState(false);

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };
  const handleImagePress = () => {

    navigation.navigate('Profile'); 
  };

    return (

      


      <SafeAreaView style={styles.mainContainer}
      edges={['right', 'left', 'top']}
          >
    
        <View style={styles.container}>
          {/* header */}

          <View style={styles.header}>
            <View style={styles.textHeader}>
              <Text style={styles.welcomeText}> Welcome Back User!</Text>
              <Text style={styles.userNameText}> Grex Martin</Text>
            </View>
            <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require('../assets/man-header.png')}
          style={styles.image}
        />
      </TouchableOpacity>
          </View>

          {/* Section Container */}
        <ScrollView style={{horizontal: 20}}>
          <View style={styles.sectionContainer}>
            {/* categories */}

            <View style={styles.categoriesContainer}>
              <View style={styles.categories}>
                <View style={styles.categoriesText}>
                  <Text style={styles.categoriesTitle}>Categories</Text>
                  <Text style={styles.categoriesViewMore}>View more</Text>
                </View>
              </View>

              {/* Categories ScrollView */}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.scrollViewImgContainer}>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/concert.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Concerts</Text>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/sports.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Sports</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/festival.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Festivals</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/weddings.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Weddings</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/seminars.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Seminars</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/automotive.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Automotive</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/movies.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Movies</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/wellness.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Wellness</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/art.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Art</Text>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hCategories/family.jpg")}
                      style={styles.imageScrollView}
                    />
                    <Text style={styles.scrollViewImgText}>Family</Text>
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* Events  */}
            <View style={styles.eventsContainer}>
              <View style={styles.events}>
                <View style={styles.eventsText}>
                  <Text style={styles.eventsTitle}> Events</Text>
                  <Text style={styles.eventsViewMore}>View more</Text>
                </View>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.scrollViewImgContainerEvents}>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/musicfest.jpg")}
                      style={styles.imageScrollViewEvents}
                    />
                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>Musicfest</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/img/people/jeline-mendez.jpg")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                           Jeline Mendez
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                      style={styles.iconEvents}
                      onPress={handleIconClick}>
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/championship.jpg")}
                      style={styles.imageScrollViewEvents}
                    />
                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>Championship</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/sinulog.webp")}
                      style={styles.imageScrollViewEvents}
                    />
                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>Sinulog</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/wedding.jpeg")}
                      style={styles.imageScrollViewEvents}
                    />
                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>Anniversary</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/motocross.jpg")}
                      style={styles.imageScrollViewEvents}
                    />

                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>MotoCross</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>
                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/movie.jpg")}
                      style={styles.imageScrollViewEvents}
                    />
                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>Filmathon</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/profDev.jpg")}
                      style={styles.imageScrollViewEvents}
                    />

                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>ProfDev</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>

                  <View style={styles.scrollImgText}>
                    <Image
                      source={require("../assets/img/hEvents/kids.jpg")}
                      style={styles.imageScrollViewEvents}
                    />

                    <View style={styles.eventsTextContainerInside}>
                      <View style={styles.eventsTextInsideImgTxt}>
                        <Text style={styles.eventsTextInside}>KidsParty</Text>
                        <View style={styles.eventsTextInsides}>
                          <Image
                            source={require("../assets/man-header.png")}
                            style={styles.imageEventsProfile}
                          />
                          <Text style={styles.eventsNameText}>
                            {" "}
                            Grex Martin
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionEvents}>
                      <TouchableOpacity
                        style={styles.buttonEvents}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextEvent}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.iconEvents}
                    onPress={handleIconClick}
                    >
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'}  />
                      
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.recommendsContainer}>
              <View style={styles.recommends}>
                <View style={styles.recommendsText}>
                  <Text style={styles.recommendsTitle}> Recommends</Text>
                </View>
                <Image
                  source={require("../assets/img/hrecommends/newYear.jpg")}
                  style={styles.recommendsImg}
                />
                <View style={styles.recommendsTextContainerInside}>
                      <View style={styles.recommendsTextInsideImgTxt}>
                        <Text style={styles.recommendsTextInside}>New Year</Text>
                        <View style={styles.recommendsTextInsides}>
                          <Image
                            source={require("../assets/img/people/ryan-williams.jpg")}
                            style={styles.imageRecommendsProfile}
                          />
                          <Text style={styles.recommendsNameText}>
                            {" "}
                            Ryan Williams
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonPositionRecommends}>
                      <TouchableOpacity
                        style={styles.buttonRecommends}
                        onPress={() => navigation.navigate("Bookings")}
                      >
                        <Text style={styles.buttonTextRecommends}>Book Now</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                      style={styles.iconRecommends}
                      onPress={handleIconClick}>
                      <Icon name="heart" size={25} color={isLiked ? '#A827FE' : 'white'} />
                    </TouchableOpacity>
              </View>  
            </View>
            
          </View>
          </ScrollView>
        </View>

      </SafeAreaView>
      
    );
  }

  





