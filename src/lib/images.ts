/** Curated Unsplash images for the Blf Packaging website.
 *  All photos are free to use commercially (Unsplash license). */

const U = "https://images.unsplash.com"

// Hero & general
export const heroFactory = `${U}/photo-1581091226825-a6a2a5aee158?w=1600&q=80`        // modern factory floor
export const heroPackaging = `${U}/photo-1676285436418-e6bc92a45fdb?w=1600&q=80`     // packaging design desk

// Box type category images
export const imgMagneticRigid = `${U}/photo-1549465220-1a8b9238cd48?w=800&q=80`       // luxury gift box
export const imgLidBase = `${U}/photo-1589939705384-5185137a7f0f?w=800&q=80`           // setup box
export const imgDrawer = `${U}/photo-1580680849668-45d32df32e67?w=800&q=80`             // drawer box
export const imgMailer = `${U}/photo-1586075010923-2dd4570fb338?w=800&q=80`             // mailer/shipping
export const imgFoldingCarton = `${U}/photo-1622560480605-d83c853bc5c3?w=800&q=80`      // folding carton
export const imgSpecialty = `${U}/photo-1544816155-12df9643f363?w=800&q=80`             // specialty cylinder box

// About / factory
export const imgFactoryFloor = `${U}/photo-1530037335614-e68828dcf258?w=1200&q=80`      // packaging production line
export const imgFactoryWorker = `${U}/photo-1516216628859-9bccecab13ca?w=1200&q=80`     // craft worker
export const imgDesign = `${U}/photo-1586717791821-3f44a563fa4c?w=1200&q=80`             // packaging design studio

// Application industries
export const imgFood = `${U}/photo-1576579406579-a50e21b53eef?w=800&q=80`               // chocolate packaging
export const imgCosmetic = `${U}/photo-1596462502278-27bfdc403348?w=800&q=80`            // cosmetic packaging
export const imgJewelry = `${U}/photo-1602173574767-37ac01994b2a?w=800&q=80`             // jewelry box
export const imgElectronics = `${U}/photo-1468495244123-6c6c332eeece?w=800&q=80`         // electronics packaging
export const imgWine = `${U}/photo-1649789093457-3a973148fa27?w=800&q=80`                // wine gift tube
export const imgSubscription = `${U}/photo-1576873600631-8757520f5d3f?w=800&q=80`        // subscription box unboxing
export const imgMedical = `${U}/photo-1576091160550-2173dba999ef?w=800&q=80`              // clean medical packaging
export const imgApparel = `${U}/photo-1441986300917-64674bd600d8?w=800&q=80`              // fashion retail packaging

// Generic category images
export const imgMaterials = `${U}/photo-1519972064555-542444e71b54?w=800&q=80`              // paper materials texture
export const imgPrinting = `${U}/photo-1414357809080-e19d8f805245?w=800&q=80`            // printing process
export const imgQuality = `${U}/photo-1581092160562-40aa08e78837?w=800&q=80`             // quality inspection
export const imgShipping = `${U}/photo-1586528116311-ad8dd3c8310d?w=800&q=80`            // shipping/warehouse

// Blog post images
export const imgBlogMaterials = `${U}/photo-1519972064555-542444e71b54?w=800&q=80`        // paper materials texture
export const imgBlogCompliance = `${U}/photo-1450101499163-c8848c66ca85?w=800&q=80`     // compliance / legal documents
export const imgBlogTrends = `${U}/photo-1607082348824-0a96f2a4b9da?w=800&q=80`         // packaging trends / design
export const imgTeam = `${U}/photo-1522071820081-009f0129c71c?w=800&q=80`               // team collaboration

/** Image map by box type slug */
export const boxTypeImages: Record<string, string> = {
  "magnetic-rigid-box": imgMagneticRigid,
  "lid-and-base-box": imgLidBase,
  "drawer-box": imgDrawer,
  "mailer-box": imgMailer,
  "folding-carton": imgFoldingCarton,
  "specialty-box": imgSpecialty,
}

/** Image map by application slug */
export const applicationImages: Record<string, string> = {
  "food-chocolate": imgFood,
  "cosmetic": imgCosmetic,
  "jewelry": imgJewelry,
  "electronics": imgElectronics,
  "wine-spirits": imgWine,
  "teeth-aligner": imgMedical,
  "apparel": imgApparel,
  "subscription-box": imgSubscription,
}
