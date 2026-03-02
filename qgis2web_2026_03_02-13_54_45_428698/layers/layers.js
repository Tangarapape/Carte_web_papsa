var wms_layers = [];

var format_Reg_0 = new ol.format.GeoJSON();
var features_Reg_0 = format_Reg_0.readFeatures(json_Reg_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reg_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reg_0.addFeatures(features_Reg_0);
var lyr_Reg_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reg_0, 
                style: style_Reg_0,
                popuplayertitle: 'Reg',
                interactive: true,
    title: 'Reg<br />\
    <img src="styles/legend/Reg_0_0.png" /> Dakar<br />\
    <img src="styles/legend/Reg_0_1.png" /> Diourbel<br />\
    <img src="styles/legend/Reg_0_2.png" /> Fatick<br />\
    <img src="styles/legend/Reg_0_3.png" /> Kaffrine<br />\
    <img src="styles/legend/Reg_0_4.png" /> Kaolack<br />\
    <img src="styles/legend/Reg_0_5.png" /> Kedougou<br />\
    <img src="styles/legend/Reg_0_6.png" /> Kolda<br />\
    <img src="styles/legend/Reg_0_7.png" /> Louga<br />\
    <img src="styles/legend/Reg_0_8.png" /> Matam<br />\
    <img src="styles/legend/Reg_0_9.png" /> Saint-Louis<br />\
    <img src="styles/legend/Reg_0_10.png" /> Sedhiou<br />\
    <img src="styles/legend/Reg_0_11.png" /> Tambacounda<br />\
    <img src="styles/legend/Reg_0_12.png" /> Thies<br />\
    <img src="styles/legend/Reg_0_13.png" /> Ziguinchor<br />\
    <img src="styles/legend/Reg_0_14.png" /> <br />' });

lyr_Reg_0.setVisible(true);
var layersList = [lyr_Reg_0];
lyr_Reg_0.set('fieldAliases', {'NAME_1': 'NAME_1', 'ID': 'ID', 'Benef_PRA': 'Benef_PRA', 'Benef_Ykk': 'Benef_Ykk', 'Benef_PSA': 'Benef_PSA', 'Incendie': 'Incendie', 'Inondation': 'Inondation', });
lyr_Reg_0.set('fieldImages', {'NAME_1': 'TextEdit', 'ID': 'Range', 'Benef_PRA': 'TextEdit', 'Benef_Ykk': 'TextEdit', 'Benef_PSA': 'TextEdit', 'Incendie': 'TextEdit', 'Inondation': 'TextEdit', });
lyr_Reg_0.set('fieldLabels', {'NAME_1': 'no label', 'ID': 'hidden field', 'Benef_PRA': 'header label - visible with data', 'Benef_Ykk': 'header label - visible with data', 'Benef_PSA': 'header label - visible with data', 'Incendie': 'header label - visible with data', 'Inondation': 'header label - visible with data', });
lyr_Reg_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});