<View style={styles.gsTextSec}>
<ScrollView>
  {/* All group information text */}
  <View style={{ display: "flex", flexDirection: "row"}}>
       {/* Left side text */}
       <View style={{ flex: 2 }}>
      <Text style={styles.gsTitleText}>Date</Text>
      <Text style={styles.gsTitleText}>Centre</Text>
      <Text style={styles.gsTitleText}>Location</Text>
      <Text style={styles.gsTitleText}>Time</Text>
      <Text style={styles.gsTitleText}>Group Limit</Text>
      <Text style={styles.gsTitleText}>Courts</Text>
      <Text style={styles.gsTitleText}>Type of Bird</Text>
      <Text style={styles.gsTitleText}>Group Frequency</Text>
      <Text style={styles.gsTitleText}>Price in Total</Text>
      <Text style={styles.gsTitleText}>Description</Text>
    </View>
    {/* Right side text */}
    <View style={{ flex: 3 }}>
      <Text style={styles.gsText}>Sat 30 December</Text>
      <Text style={styles.gsText}>Stage 18</Text>
      <Text style={styles.gsText}>4351 No 3 Rd #100, Richmond</Text>
      <Text style={styles.gsText}>9am - 1pm </Text>

      {/* Add or subtract number of group members */}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity 
        onPress={() => { 
            setGroupLimit(grouplimit-1);
        }} 
        >
          <Image
            style={styles.minusImg}
            source={require("../assets/but_minus.png")}
          />
        </TouchableOpacity>
        {/* Group limit text */}
        <Text style={styles.gsText}>{grouplimit}</Text>
        <TouchableOpacity
        onPress={() => { 
            setGroupLimit(grouplimit+1);
        }} 
        >
          <Image
            style={styles.addImg}
            source={require("../assets/but_add.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.gsText}>7, 8</Text>
      <Text style={styles.gsText}>Switch</Text>
      <Text style={styles.gsText}>Switch</Text>
      <Text style={styles.gsPriceText}>$176</Text>
    </View>
  </View>
    
  {/* Post Button */}
  <TouchableOpacity style={styles.postBut}>
    <Text style={styles.postButText}>POST</Text>
  </TouchableOpacity>
</ScrollView>
</View>